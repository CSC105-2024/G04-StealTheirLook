import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../index.js'

export const authRoute = new Hono()

const registerSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
})

const loginSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
    rememberMe: z.boolean().optional().default(false),
})

authRoute.post('/register', zValidator('json', registerSchema), async (c) => {
    try {
        const { username, password } = await c.req.json()
        const hash = await bcrypt.hash(password, 12)

        const user = await db.user.create({
            data: {
                username,
                password: hash,
                displayName: username,
                profilePicture: '',
                createdAt: new Date(),
            },
        })

        return c.json({ id: user.userId })
    } catch (err) {
        console.error('REGISTER ERROR →', err)
        return c.json({ message: 'Username is taken' }, 400)
    }
})

authRoute.post('/login', zValidator('json', loginSchema), async (c) => {
    try {
        const { username, password, rememberMe } = await c.req.json()

        const user = await db.user.findFirst({ where: { username } })
        if (!user) return c.json({ message: 'Bad credentials' }, 400)

        const ok = await bcrypt.compare(password, user.password)
        if (!ok) return c.json({ message: 'Bad credentials' }, 400)

        const secret = process.env.JWT_SECRET
        if (!secret) throw new Error('JWT_SECRET missing!')

        // Set expiration time based on rememberMe
        const expiresIn = rememberMe ? '30d' : '24h'
        const token = jwt.sign({ id: user.userId }, secret, { expiresIn })

        // Calculate cookie max age (in seconds)
        const maxAge = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 // 30 days or 1 day

        // Set the token as a cookie
        c.header('Set-Cookie', `auth_token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`)

        return c.json({
            user: {
                id: user.userId,
                username: user.username,
                displayName: user.displayName,
                profilePicture: user.profilePicture
            },
        })
    } catch (err) {
        console.error('LOGIN ERROR →', err)
        return c.json({ message: 'Internal error' }, 500)
    }
})

authRoute.get('/me', async (c) => {
    try {
        // Get the token from cookies
        const cookies = c.req.header('cookie') || ''
        const tokenMatch = cookies.match(/auth_token=([^;]+)/)
        const token = tokenMatch ? tokenMatch[1] : null

        if (!token) {
            return c.json({ message: 'Authentication required' }, 401)
        }

        const secret = process.env.JWT_SECRET
        if (!secret) throw new Error('JWT_SECRET missing!')

        // Verify the token
        const payload = jwt.verify(token, secret) as { id: number }

        // Get the user from the database
        const user = await db.user.findUnique({
            where: { userId: payload.id }
        })

        if (!user) {
            return c.json({ message: 'User not found' }, 404)
        }

        // Return user data without the password
        return c.json({
            id: user.userId,
            username: user.username,
            displayName: user.displayName,
            profilePicture: user.profilePicture,
            createdAt: user.createdAt
        })
    } catch (err) {
        console.error('ME ERROR →', err)
        return c.json({ message: 'Invalid session' }, 401)
    }
})

authRoute.post('/logout', (c) => {
    // Clear the auth cookie
    c.header('Set-Cookie', 'auth_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict')
    return c.json({ message: 'Logged out successfully' })
})
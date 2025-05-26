import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../index.js'

export const authRoute = new Hono()


const credSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
})


authRoute.post('/register', zValidator('json', credSchema), async (c) => {
    try {
        const { username, password } = await c.req.json()
        const hash = await bcrypt.hash(password, 12)

        const user = await db.user.create({
            data: {
                username,
                password: hash,
                displayName: username,
                profilePicture: '',
                joinDate: new Date().toISOString(),
            },
        })

        return c.json({ id: user.userId })
    } catch (err) {
        console.error('REGISTER ERROR →', err)
        return c.json({ message: 'Username is taken' }, 400)
    }
})


authRoute.post('/login', zValidator('json', credSchema), async (c) => {
    try {
        const { username, password } = await c.req.json()

        const user = await db.user.findFirst({ where: { username } })
        if (!user) return c.json({ message: 'Bad credentials' }, 400)

        const ok = await bcrypt.compare(password, user.password)
        if (!ok) return c.json({ message: 'Bad credentials' }, 400)

        const secret = process.env.JWT_SECRET
        if (!secret) throw new Error('JWT_SECRET missing!')

        const token = jwt.sign({ id: user.userId }, secret, { expiresIn: '7d' })

        return c.json({
            token,
            user: { id: user.userId, username: user.username },
        })
    } catch (err) {
        console.error('LOGIN ERROR →', err)
        return c.json({ message: 'Internal error' }, 500)
    }
})

// ------------------------------------------------------------
// Simple test endpoint
// ------------------------------------------------------------
authRoute.get('/me', (c) => c.json({ ok: true }))
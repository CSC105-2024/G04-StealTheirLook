import { Hono } from 'hono'
import type { Context, Next } from 'hono'
import jwt from 'jsonwebtoken'

export const auth = async (c: Context, next: Next) => {
    const header = c.req.raw.headers.get('authorization')
    if (!header) return c.json({ message: 'Missing token' }, 401)

    try {
        const token = header.replace('Bearer ', '')
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as { id: number }
        // expose userId to downstream handlers
        c.set('userId', payload.id)
        await next()
    } catch (e) {
        return c.json({ message: 'Invalid / expired token' }, 401)
    }
}
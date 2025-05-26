import type {Context, Next} from 'hono'
import jwt from 'jsonwebtoken'

export const auth = async (c: Context, next: Next) => {
    try {
        // Get the token from cookies
        const cookies = c.req.header('cookie') || ''
        const tokenMatch = cookies.match(/auth_token=([^;]+)/)
        const token = tokenMatch ? tokenMatch[1] : null

        if (!token) {
            return c.json({ message: 'Authentication required' }, 401)
        }

        // Verify the JWT token
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as { id: number }

        // Expose userId to downstream handlers
        c.set('userId', payload.id)

        // Continue to the next middleware/handler
        await next()
    } catch (e) {
        // For JWT verification errors
        return c.json({ message: 'Invalid or expired session' }, 401)
    }
}
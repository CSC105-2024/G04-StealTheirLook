import { Hono } from 'hono'
import { authRoute }      from './auth.js'
import { userRoute }      from './userRoute.js'
import { postRoute }      from './postRoute.js'
import { checkRoute }     from './checkRoute.js'
import { savedPostRouter } from './savedPostRoute.js'
import { savedCheckRoute }from './savedCheckRoute.js'

export const mainRouter = new Hono()

// Public routes - don't require authentication
mainRouter.route('/auth', authRoute)

// API routes - authentication is handled at the individual route level
mainRouter.route('/user',       userRoute)
mainRouter.route('/post',       postRoute)
mainRouter.route('/check',      checkRoute)
mainRouter.route('/savedPost',  savedPostRouter)
mainRouter.route('/savedCheck', savedCheckRoute)
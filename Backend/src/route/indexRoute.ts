import { Hono } from 'hono'
import { authRoute }      from './auth.js'
import { userRoute }      from './userRoute.js'
import { postRoute }      from './postRoute.js'
import { checkRoute }     from './checkRoute.js'
import { savedPostRouter } from './savedPostRoute.js'
import { savedCheckRoute }from './savedCheckRoute.js'
import { auth }           from '../middleware/auth.js'

export const mainRouter = new Hono()

mainRouter.route('/auth', authRoute)

const protectedRouter = new Hono()

protectedRouter.use('*', auth)

protectedRouter.route('/user',      userRoute)
protectedRouter.route('/post',      postRoute)
protectedRouter.route('/check',     checkRoute)
protectedRouter.route('/savedPost', savedPostRouter)
protectedRouter.route('/savedCheck',savedCheckRoute)

// mount the protected sub-app under "/"
mainRouter.route('/', protectedRouter)
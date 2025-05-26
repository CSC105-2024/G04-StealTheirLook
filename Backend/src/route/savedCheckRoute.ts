import { Hono } from 'hono'
import * as savedCheckController from '../controller/savedCheckController.js'
import { auth } from '../middleware/auth.js'

export const savedCheckRoute = new Hono()

// All saved check operations require authentication
savedCheckRoute.patch('/updateCheck', auth, savedCheckController.updateCheck)
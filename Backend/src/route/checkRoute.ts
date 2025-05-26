import { Hono } from 'hono'
import * as checkController from '../controller/checkController.js'
import { auth } from '../middleware/auth.js'

export const checkRoute = new Hono()

// All check operations require authentication
checkRoute.patch('/editCheckBrand', auth, checkController.editCheckBrand)
checkRoute.patch('/editCheckClothe', auth, checkController.editCheckClothe)
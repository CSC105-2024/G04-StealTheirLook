import { Hono } from 'hono'
import * as checkController from '../controller/checkController.js'

export const checkRoute = new Hono()

checkRoute.patch('/editCheckBrand',  checkController.editCheckBrand)
checkRoute.patch('/editCheckClothe', checkController.editCheckClothe)
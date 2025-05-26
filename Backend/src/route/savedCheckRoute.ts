import { Hono } from 'hono'
import * as savedCheckController from '../controller/savedCheckController.js'

export const savedCheckRoute = new Hono()

savedCheckRoute.patch('/updateCheck', savedCheckController.updateCheck)
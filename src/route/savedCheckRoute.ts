import { Hono } from "hono"
import * as savedCheckController from '../controller/savedCheckController.js'

const savedCheckRouter = new Hono()

savedCheckRouter.patch('/updateCheck', savedCheckController.updateCheck)

export { savedCheckRouter }
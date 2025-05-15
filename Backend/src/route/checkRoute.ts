import { Hono } from "hono"
import * as checkController from "../controller/checkController.js"

const checkRouter = new Hono()

checkRouter.patch('/editCheckBrand', checkController.editCheckBrand)
checkRouter.patch('/editCheckClothe', checkController.editCheckClothe)

export { checkRouter }
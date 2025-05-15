import { Hono } from "hono"
import { userRouter } from "./userRoute.js";
import { postRouter } from "./postRoute.js";
import { checkRouter } from "./checkRoute.js";
import { savedPostRouter } from "./savedPostRoute.js";
import { savedCheckRouter } from "./savedCheckRoute.js";

const mainRouter = new Hono()

mainRouter.route('/user', userRouter)
mainRouter.route('/post', postRouter)
mainRouter.route('/check', checkRouter)
mainRouter.route('/savedPost', savedPostRouter)
mainRouter.route('/savedCheck', savedCheckRouter)

export { mainRouter }
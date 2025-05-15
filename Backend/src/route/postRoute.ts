import { Hono } from "hono"
import * as postController from "../controller/postController.js"
const postRouter = new Hono()

postRouter.post('/createPost', postController.createPost)

postRouter.get('/getPostImage', postController.getPostImage)
postRouter.get('/getPostTitle', postController.getPostTitle)
postRouter.get('/getPostTag', postController.getPostTag)
postRouter.get('/getPostChecklist', postController.getPostChecklist)

postRouter.delete('/deletePost', postController.deletePost)

export { postRouter }
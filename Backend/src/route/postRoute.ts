import { Hono } from 'hono'
import * as postController from '../controller/postController.js'

export const postRoute = new Hono()

postRoute.post ('/createPost',       postController.createPost)
postRoute.patch('/getPosts',         postController.getPosts)
postRoute.get  ('/getPostImage',     postController.getPostImage)
postRoute.get  ('/getPostTitle',     postController.getPostTitle)
postRoute.get  ('/getPostTag',       postController.getPostTag)
postRoute.get  ('/getPostChecklist', postController.getPostChecklist)
postRoute.delete('/deletePost',      postController.deletePost)
postRoute.get  ('/isSaved',          postController.isSaved)
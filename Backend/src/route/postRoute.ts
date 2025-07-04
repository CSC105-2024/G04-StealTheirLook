import { Hono } from 'hono'
import * as postController from '../controller/postController.js'
import { auth } from '../middleware/auth.js'

export const postRoute = new Hono()

// Protected routes that require authentication
postRoute.post('/createPost', auth, postController.createPost)
postRoute.delete('/deletePost', auth, postController.deletePost)

// Public routes
postRoute.patch('/getPosts', postController.getPosts) // This is for getting multiple posts
postRoute.get('/getPostImage', postController.getPostImage)
postRoute.get('/getPostTitle', postController.getPostTitle)
postRoute.get('/getPostTag', postController.getPostTag)
postRoute.get('/getPostChecklist', postController.getPostChecklist)

// NEW: Route for getting a single post by its ID
postRoute.get('/getPostById', postController.getPostById)

// Mixed route - requires userId but can be accessed publicly
postRoute.get('/isSaved', postController.isSaved)

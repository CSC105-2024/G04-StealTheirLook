import { Hono } from "hono"
import * as savedPostController from '../controller/savedPostController.js'
import { auth } from '../middleware/auth.js'

const savedPostRouter = new Hono()

// All saved post operations require authentication
savedPostRouter.post('/createSavedPost', auth, savedPostController.createSavedPost)
savedPostRouter.get('/getSavedPostImage', auth, savedPostController.getSavedPostImage)
savedPostRouter.get('/getSavedPostTitle', auth, savedPostController.getSavedPostTitle)
savedPostRouter.get('/getSavedPostTag', auth, savedPostController.getSavedPostTag)
savedPostRouter.get('/getSavedPostChecklist', auth, savedPostController.getSavedPostChecklist)
savedPostRouter.delete('/deleteSavedPost', auth, savedPostController.deleteSavedPost)

export { savedPostRouter }
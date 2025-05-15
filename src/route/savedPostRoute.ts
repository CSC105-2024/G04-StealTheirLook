import { Hono } from "hono"
import * as savedPostController from '../controller/savedPostController.js'
const savedPostRouter = new Hono()

savedPostRouter.post('/createSavedPost', savedPostController.createSavedPost)

savedPostRouter.get('/getSavedPostImage', savedPostController.getSavedPostImage)
savedPostRouter.get('/getSavedPostTitle', savedPostController.getSavedPostTitle)
savedPostRouter.get('/getSavedPostTag', savedPostController.getSavedPostTag)
savedPostRouter.get('/getSavedPostChecklist', savedPostController.getSavedPostChecklist)

savedPostRouter.delete('/deleteSavedPost', savedPostController.deleteSavedPost)

export { savedPostRouter }
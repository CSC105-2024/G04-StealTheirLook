import { Hono } from 'hono'
import * as userController from '../controller/userController.js'
import { auth } from '../middleware/auth.js'

export const userRoute = new Hono()

// Public READ-ONLY routes (no auth required)
userRoute.get('/getUsername', userController.getUsername)
userRoute.get('/getProfilePicture', userController.getUserProfilePicture)
userRoute.get('/getDisplayName', userController.getDisplayName)
userRoute.get('/getJoinDate', userController.getJoinDate)

// Protected routes (auth required)
// For getting current user's posts and saved posts
userRoute.get('/getPost', auth, userController.getUserPost)
userRoute.get('/getSavedPost', auth, userController.getUserSavedPost)

// Protected MUTATIONS (auth required)
userRoute.patch('/updateProfilePicture', auth, userController.updateProfilePicture)
userRoute.patch('/updateDisplayName', auth, userController.updateDisplayName)
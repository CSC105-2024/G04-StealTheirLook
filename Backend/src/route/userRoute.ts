import { Hono } from 'hono'
import * as userController from '../controller/userController.js'

export const userRoute = new Hono()

// READ-ONLY
userRoute.get('/getUsername',        userController.getUsername)
userRoute.get('/getProfilePicture',  userController.getUserProfilePicture)
userRoute.get('/getDisplayName',     userController.getDisplayName)
userRoute.get('/getJoinDate',        userController.getJoinDate)
userRoute.get('/getPost',            userController.getUserPost)
userRoute.get('/getSavedPost',       userController.getUserSavedPost)

// MUTATIONS
userRoute.patch('/updateProfilePicture', userController.updateProfilePicture)
userRoute.patch('/updateDisplayName',    userController.updateDisplayName)
import { Hono } from "hono"
import * as userController from "../controller/userController.js"
const userRouter = new Hono()

userRouter.post('/createUser', userController.createUser)

userRouter.get("/getUsername",userController.getUsername)
userRouter.get("/getProfilePicture",userController.getUserProfilePicture)
userRouter.get("/getDisplayName",userController.getDisplayName)
userRouter.get('/getJoinDate', userController.getJoinDate)
userRouter.get("/getCreatedPost",userController.getUserPost)
userRouter.get("/getSavedPost",userController.getUserSavedPost)

userRouter.patch("/updateProfilePicture",userController.updateProfilePicture)
userRouter.patch("/updateDisplayName",userController.updateDisplayName)

export { userRouter }
import type {Context} from 'hono'
import * as userModel from '../model/userModel.js'

export const getUsername = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const res    = await userModel.getUsername({ userId })
    return c.json(res)
}

export const getUserProfilePicture = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const res    = await userModel.getUserProfilePicture({ userId })
    return c.json(res)
}

export const getDisplayName = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const res    = await userModel.getDisplayName({ userId })
    return c.json(res)
}

export const getJoinDate = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const res    = await userModel.getJoinDate({ userId })
    return c.json(res)
}

export const getUserPost = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const res    = await userModel.getUserPost({ userId })
    return c.json(res)
}

export const getUserSavedPost = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const res    = await userModel.getUserSavedPost({ userId })
    return c.json(res)
}

export const updateProfilePicture = async (c: Context) => {
    const body = await c.req.json()
    const res  = await userModel.updateProfilePicture(body)
    return c.json(res)
}

export const updateDisplayName = async (c: Context) => {
    const body = await c.req.json()
    const res  = await userModel.updateDisplayName(body)
    return c.json(res)
}
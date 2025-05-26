import type {Context} from 'hono'
import * as postModel from '../model/postModel.js'

export const createPost = async (c: Context) => {
    const body = await c.req.json()
    const res  = await postModel.createPost(body)
    return c.json(res)
}

export const getPosts = async (c: Context) => {
    const body = await c.req.json()          // tags array sent in PATCH
    const res  = await postModel.getPost(body)
    return c.json(res)
}

export const getPostImage = async (c: Context) => {
    const postId = Number(c.req.query('postId'))
    const res    = await postModel.getPostImage({ postId })
    return c.json(res)
}

export const getPostTitle = async (c: Context) => {
    const postId = Number(c.req.query('postId'))
    const res    = await postModel.getPostTitle({ postId })
    return c.json(res)
}

export const getPostTag = async (c: Context) => {
    const postId = Number(c.req.query('postId'))
    const res    = await postModel.getPostTag({ postId })
    return c.json(res)
}

export const getPostChecklist = async (c: Context) => {
    const postId = Number(c.req.query('postId'))
    const res    = await postModel.getPostChecklist({ postId })
    return c.json(res)
}

export const deletePost = async (c: Context) => {
    const body = await c.req.json()          // { postId }
    const res  = await postModel.deletePost(body)
    return c.json(res)
}

export const isSaved = async (c: Context) => {
    const userId = Number(c.req.query('userId'))
    const postId = Number(c.req.query('postId'))
    const res    = await postModel.isSaved({ userId, postId })
    return c.json(res)
}
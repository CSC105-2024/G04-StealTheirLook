import type { Context } from 'hono'
import * as postModel from '../model/postModel.js'

export const createPost = async (c: Context) => {
    try {
        const body = await c.req.json()
        const userId = c.get('userId') // Assuming userId is set by a middleware

        const postData = { ...body, userId }

        const res = await postModel.createPost(postData)
        return c.json({ success: true, data: res })
    } catch (error) {
        console.error('Error creating post:', error)
        return c.json({ success: false, error: 'Failed to create post' }, 500)
    }
}

export const getPosts = async (c: Context) => {
    try {
        const body = await c.req.json() // Assuming tags are in the request body
        const res = await postModel.getPost(body)
        return c.json(res)
    } catch (error) {
        console.error('Error getting posts:', error)
        return c.json({ success: false, error: 'Failed to get posts' }, 500)
    }
}

// Existing getPostById function (no changes to logic needed here)
export const getPostById = async (c: Context) => {
    try {
        const postId = Number(c.req.query('postId')) // Extract postId from query params
        if (!postId || isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid post ID' }, 400)
        }

        const res = await postModel.getPostById({ postId }) // Calls the model's getPostById
        if (!res) {
            return c.json({ success: false, error: 'Post not found' }, 404)
        }
        return c.json(res) // Returns the single post object
    } catch (error) {
        console.error('Error getting post by ID:', error)
        return c.json({ success: false, error: 'Failed to get post by ID' }, 500)
    }
}

export const getPostImage = async (c: Context) => {
    try {
        const postId = Number(c.req.query('postId')) // Extract postId from query params
        if (!postId || isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid post ID' }, 400)
        }

        const res = await postModel.getPostImage({ postId })
        return c.json(res)
    } catch (error) {
        console.error('Error getting post image:', error)
        return c.json({ success: false, error: 'Failed to get post image' }, 500)
    }
}

export const getPostTitle = async (c: Context) => {
    try {
        const postId = Number(c.req.query('postId'))
        if (!postId || isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid post ID' }, 400)
        }

        const res = await postModel.getPostTitle({ postId })
        return c.json(res)
    } catch (error) {
        console.error('Error getting post title:', error)
        return c.json({ success: false, error: 'Failed to get post title' }, 500)
    }
}

export const getPostTag = async (c: Context) => {
    try {
        const postId = Number(c.req.query('postId'))
        if (!postId || isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid post ID' }, 400)
        }

        const res = await postModel.getPostTag({ postId })
        return c.json(res)
    } catch (error) {
        console.error('Error getting post tag:', error)
        return c.json({ success: false, error: 'Failed to get post tag' }, 500)
    }
}

export const getPostChecklist = async (c: Context) => {
    try {
        const postId = Number(c.req.query('postId'))
        if (!postId || isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid post ID' }, 400)
        }

        const res = await postModel.getPostChecklist({ postId })
        return c.json(res)
    } catch (error) {
        console.error('Error getting post checklist:', error)
        return c.json({ success: false, error: 'Failed to get post checklist' }, 500)
    }
}

export const deletePost = async (c: Context) => {
    try {
        const body = await c.req.json()
        const postId = Number(body.postId) // Ensure postId from request body is a number
        if (isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid post ID provided' }, 400);
        }

        const userId = c.get('userId') // Assuming userId is set by a middleware

        // Check if post belongs to the user
        const post = await postModel.getPostById({ postId: postId })

        if (!post) {
            return c.json({ success: false, error: 'Post not found' }, 404)
        }

        if (post.userId !== userId) {
            return c.json({ success: false, error: 'Unauthorized' }, 403)
        }

        // Call the model function to delete the post
        const res = await postModel.deletePost({ postId: postId })
        return c.json({ success: true, data: res })
    } catch (error) {
        console.error('Error deleting post:', error)
        return c.json({ success: false, error: 'Failed to delete post' }, 500)
    }
}

export const isSaved = async (c: Context) => {
    try {
        const userId = Number(c.req.query('userId'))
        const postId = Number(c.req.query('postId'))

        if (!userId || isNaN(userId) || !postId || isNaN(postId)) {
            return c.json({ success: false, error: 'Invalid user ID or post ID' }, 400)
        }

        const res = await postModel.isSaved({ userId, postId })
        return c.json({
            isSaved: !!res,
            savedPostId: res ? res.savedPostId : null
        })
    } catch (error) {
        console.error('Error checking if post is saved:', error)
        return c.json({ success: false, error: 'Failed to check if post is saved' }, 500)
    }
}

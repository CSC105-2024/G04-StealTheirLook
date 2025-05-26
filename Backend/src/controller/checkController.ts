import type {Context} from 'hono'
import * as checkModel from '../model/checkModel.js'
import * as postModel from '../model/postModel.js'

export const editCheckBrand = async (c: Context) => {
    try {
        const body = await c.req.json()
        const userId = c.get('userId')

        if (!body.checkId || !body.brand) {
            return c.json({
                success: false,
                error: "Missing required fields"
            }, 400)
        }

        const check = await checkModel.getCheckById(body.checkId)
        if (!check) {
            return c.json({
                success: false,
                error: "Check item not found"
            }, 404)
        }

        const post = await postModel.getPostById({ postId: check.postId })
        if (!post) {
            return c.json({
                success: false,
                error: "Post not found"
            }, 404)
        }

        if (post.userId !== userId) {
            return c.json({
                success: false,
                error: "Unauthorized - you can only edit your own posts"
            }, 403)
        }

        const res = await checkModel.editCheckBrand(body)
        return c.json({
            success: true,
            data: res,
            message: "Check brand updated successfully"
        })
    } catch (error) {
        console.error("Error updating check brand:", error)
        return c.json({
            success: false,
            error: "Failed to update check brand"
        }, 500)
    }
}

export const editCheckClothe = async (c: Context) => {
    try {
        const body = await c.req.json()
        const userId = c.get('userId')

        if (!body.checkId || !body.clothe) {
            return c.json({
                success: false,
                error: "Missing required fields"
            }, 400)
        }

        // Verify the user owns the post containing this check
        const check = await checkModel.getCheckById(body.checkId)
        if (!check) {
            return c.json({
                success: false,
                error: "Check item not found"
            }, 404)
        }

        // Get the post to check ownership
        const post = await postModel.getPostById({ postId: check.postId })
        if (!post) {
            return c.json({
                success: false,
                error: "Post not found"
            }, 404)
        }

        // Verify ownership
        if (post.userId !== userId) {
            return c.json({
                success: false,
                error: "Unauthorized - you can only edit your own posts"
            }, 403)
        }

        const res = await checkModel.editCheckClothe(body)
        return c.json({
            success: true,
            data: res,
            message: "Check item updated successfully"
        })
    } catch (error) {
        console.error("Error updating check clothe:", error)
        return c.json({
            success: false,
            error: "Failed to update check item"
        }, 500)
    }
}
import type { Context } from "hono";
import * as savedPostModel from "../model/savedPostModel.js"
import * as postModel from "../model/postModel.js"

type CreateSavedPostBody = {
    postId: number,
}

type DeleteSavedPostBody = {
    savedPostId: string,
}

const createSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<CreateSavedPostBody>()
        // Get user ID from auth middleware
        const userId = c.get('userId')

        if(!body.postId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing required fields",
                },
                400
            );
        }

        // Check if post exists
        const postData = await postModel.getPostById({ postId: body.postId })
        if (!postData) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Post not found",
                },
                404
            );
        }

        // Check if already saved
        const existing = await savedPostModel.getSavedPostByUserAndPost({
            userId,
            postId: body.postId
        })

        if (existing) {
            return c.json({
                success: true,
                data: existing,
                message: "Post already saved",
            });
        }

        // Get post details
        const [imageData, titleData, tagData, checklistData] = await Promise.all([
            postModel.getPostImage({ postId: body.postId }),
            postModel.getPostTitle({ postId: body.postId }),
            postModel.getPostTag({ postId: body.postId }),
            postModel.getPostChecklist({ postId: body.postId })
        ]);

        const savedPost = await savedPostModel.createSavedPost({
            userId,
            postId: body.postId,
            image: imageData,
            title: titleData,
            tag: tagData,
            checklist: checklistData,
        });

        return c.json({
            success: true,
            data: {
                savedPostId: savedPost
            },
            message: "Post saved successfully",
        });
    }
    catch (error) {
        console.error("Error creating saved post:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to save post",
            },
            500
        )
    }
}

const getSavedPostImage = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId")
        if(!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        // Verify ownership
        const userId = c.get('userId')
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized",
                },
                403
            );
        }

        const image = await savedPostModel.getSavedPostImage({savedPostId})
        return c.json(image);
    }
    catch (error) {
        console.error("Error getting saved post image:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post image",
            },
            500
        )
    }
}

const getSavedPostTitle = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId")
        if(!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        // Verify ownership
        const userId = c.get('userId')
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized",
                },
                403
            );
        }

        const title = await savedPostModel.getSavedPostTitle({savedPostId});
        return c.json(title);
    }
    catch (error) {
        console.error("Error getting saved post title:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post title",
            },
            500
        )
    }
}

const getSavedPostTag = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId")
        if(!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        // Verify ownership
        const userId = c.get('userId')
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized",
                },
                403
            );
        }

        const tag = await savedPostModel.getSavedPostTag({savedPostId});
        return c.json(tag);
    }
    catch (error) {
        console.error("Error getting saved post tag:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post tag",
            },
            500
        )
    }
}

const getSavedPostChecklist = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId")
        if(!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        // Verify ownership
        const userId = c.get('userId')
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized",
                },
                403
            );
        }

        const checklist = await savedPostModel.getSavedPostChecklist({savedPostId});
        return c.json(checklist);
    }
    catch (error) {
        console.error("Error getting saved post checklist:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post checklist",
            },
            500
        )
    }
}

const deleteSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<DeleteSavedPostBody>()
        if(!body.savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        // Verify ownership
        const userId = c.get('userId')
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId: body.savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized",
                },
                403
            );
        }

        const deletedPost = await savedPostModel.deleteSavedPost(body)
        return c.json({
            success: true,
            data: deletedPost,
            message: "Saved post deleted successfully",
        });
    }
    catch (error) {
        console.error("Error deleting saved post:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to delete saved post",
            },
            500
        )
    }
}

export {
    createSavedPost,
    getSavedPostImage,
    getSavedPostTitle,
    getSavedPostTag,
    getSavedPostChecklist,
    deleteSavedPost
};
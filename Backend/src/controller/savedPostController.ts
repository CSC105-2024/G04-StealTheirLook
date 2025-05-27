import type { Context } from "hono";
import * as savedPostModel from "../model/savedPostModel.js";
import * as postModel from "../model/postModel.js";

type RawCreateSavedPostBody = {
    postId: number | string;
};

type DeleteSavedPostBody = {
    savedPostId: string;
};

const createSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<RawCreateSavedPostBody>();
        const userId = c.get('userId') as number;

        console.log(`[Controller - createSavedPost] Received: postId=${body.postId}, userId=${userId}`);

        if (body.postId === undefined || body.postId === null || String(body.postId).trim() === "") {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing required field: postId",
                },
                400
            );
        }

        const postIdAsNumber = parseInt(String(body.postId), 10);

        if (isNaN(postIdAsNumber)) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Invalid postId format. Must be a number or a string representing a number.",
                },
                400
            );
        }

        const postData = await postModel.getPostById({ postId: postIdAsNumber });
        if (!postData) {
            console.log(`[Controller - createSavedPost] Original Post not found for postId: ${postIdAsNumber}`);
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Post not found",
                },
                404
            );
        }

        const existing = await savedPostModel.getSavedPostByUserAndPost({
            userId,
            postId: postIdAsNumber
        });

        if (existing) {
            console.log(`[Controller - createSavedPost] Post already saved: ${existing.savedPostId}`);
            return c.json({
                success: true,
                data: existing,
                message: "Post already saved",
            });
        }

        const [imageData, checklistData] = await Promise.all([
            postModel.getPostImage({ postId: postIdAsNumber }),
            postModel.getPostChecklist({ postId: postIdAsNumber })
        ]);
        const titleData = await postModel.getPostTitle({ postId: postIdAsNumber })
        const tagData = await postModel.getPostTag({ postId: postIdAsNumber })

        console.log(`[Controller - createSavedPost] Fetched original post details: image=${imageData ? 'yes' : 'no'}, title=${titleData ? 'yes' : 'no'}, tag=${tagData ? 'yes' : 'no'}, checklist=${checklistData ? checklistData.length : 'no'}`);

        const savedPost = await savedPostModel.createSavedPost({
            userId,
            postId: postIdAsNumber,
            image: imageData,
            title: titleData,
            tag: tagData,
            checklist: checklistData,
        });
        console.log(`[Controller - createSavedPost] Saved post created with ID: ${savedPost}`);

        return c.json({
            success: true,
            data: { savedPost: savedPost },
            message: "Post saved successfully",
        });
    } catch (error) {
        console.error("Error creating saved post:", error);
        let errorMessage = "Failed to save post";
        let statusCode = 500;
        if (error.name === 'PrismaClientValidationError') {
            errorMessage = "Invalid data provided for saving post.";
            statusCode = 400;
        } else if (error.message && error.message.includes("foreign key constraint fails")) {
            errorMessage = "Related data not found (e.g., user or post).";
            statusCode = 404;
        }
        return c.json(
            {
                success: false,
                data: null,
                error: errorMessage,
                details: error.message
            },
            statusCode
        );
    }
};

const getSavedPostImage = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId");
        const userId = c.get('userId') as number;
        console.log(`[Controller - getSavedPostImage] Request for savedPostId: ${savedPostId}, userId: ${userId}`);

        if (!savedPostId) {
            return c.json({ success: false, data: null, error: "Missing saved post ID" }, 400);
        }

        const isOwner = await savedPostModel.verifySavedPostOwner({ savedPostId, userId });
        console.log(`[Controller - getSavedPostImage] isOwner check result: ${isOwner}`);

        if (!isOwner) {
            return c.json({ success: false, data: null, error: "Unauthorized or post not found" }, 403);
        }

        const image = await savedPostModel.getSavedPostImage({ savedPostId });
        console.log(`[Controller - getSavedPostImage] Data from model:`, image ? 'Data found' : 'No data found');
        if (image === null) {
            return c.json({ success: false, data: null, error: "Saved post image not found" }, 404);
        }
        return c.json({ success: true, data: image });
    } catch (error) {
        console.error("Error getting saved post image:", error);
        return c.json({ success: false, data: null, error: "Failed to get saved post image" }, 500);
    }
};

const getSavedPostTitle = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId");
        const userId = c.get('userId') as number;
        console.log(`[Controller - getSavedPostTitle] Request for savedPostId: ${savedPostId}, userId: ${userId}`);

        if (!savedPostId) {
            return c.json({ success: false, data: null, error: "Missing saved post ID" }, 400);
        }

        const isOwner = await savedPostModel.verifySavedPostOwner({ savedPostId, userId });
        console.log(`[Controller - getSavedPostTitle] isOwner check result: ${isOwner}`);

        if (!isOwner) {
            return c.json({ success: false, data: null, error: "Unauthorized or post not found" }, 403);
        }

        const title = await savedPostModel.getSavedPostTitle({ savedPostId });
        console.log(`[Controller - getSavedPostTitle] Data from model:`, title !== null ? 'Data found' : 'No data found');
        // This logic is now correct because the model will send '' instead of null if the DB has ''
        if (title === null || title === undefined) {
            return c.json({ success: false, data: null, error: "Saved post title not found" }, 404);
        }
        return c.json({ success: true, data: title });
    } catch (error) {
        console.error("Error getting saved post title:", error);
        return c.json({ success: false, data: null, error: "Failed to get saved post title" }, 500);
    }
};

const getSavedPostTag = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId");
        const userId = c.get('userId') as number;
        console.log(`[Controller - getSavedPostTag] Request for savedPostId: ${savedPostId}, userId: ${userId}`);

        if (!savedPostId) {
            return c.json({ success: false, data: null, error: "Missing saved post ID" }, 400);
        }

        const isOwner = await savedPostModel.verifySavedPostOwner({ savedPostId, userId });
        console.log(`[Controller - getSavedPostTag] isOwner check result: ${isOwner}`);

        if (!isOwner) {
            return c.json({ success: false, data: null, error: "Unauthorized or post not found" }, 403);
        }

        const tag = await savedPostModel.getSavedPostTag({ savedPostId });
        console.log(`[Controller - getSavedPostTag] Data from model:`, tag !== null ? 'Data found' : 'No data found');
        // This logic is now correct because the model will send '' instead of null if the DB has ''
        if (tag === null || tag === undefined) {
            return c.json({ success: false, data: null, error: "Saved post tag not found" }, 404);
        }
        return c.json({ success: true, data: tag });
    } catch (error) {
        console.error("Error getting saved post tag:", error);
        return c.json({ success: false, data: null, error: "Failed to get saved post tag" }, 500);
    }
};

const getSavedPostChecklist = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId");
        const userId = c.get('userId') as number;
        console.log(`[Controller - getSavedPostChecklist] Request for savedPostId: ${savedPostId}, userId: ${userId}`);

        if (!savedPostId) {
            return c.json({ success: false, data: null, error: "Missing saved post ID" }, 400);
        }

        const isOwner = await savedPostModel.verifySavedPostOwner({ savedPostId, userId });
        console.log(`[Controller - getSavedPostChecklist] isOwner check result: ${isOwner}`);

        if (!isOwner) {
            return c.json({ success: false, data: null, error: "Unauthorized or post not found" }, 403);
        }

        const checklist = await savedPostModel.getSavedPostChecklist({ savedPostId });
        console.log(`[Controller - getSavedPostChecklist] Data from model:`, checklist ? `Found ${checklist.length} items` : 'No data found');
        return c.json({ success: true, data: checklist });
    } catch (error) {
        console.error("Error getting saved post checklist:", error);
        return c.json({ success: false, data: null, error: "Failed to get saved post checklist" }, 500);
    }
};

const deleteSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<DeleteSavedPostBody>();
        console.log(`[Controller - deleteSavedPost] Request to delete savedPostId: ${body.savedPostId}`);

        if (!body.savedPostId) {
            return c.json({ success: false, data: null, error: "Missing saved post ID" }, 400);
        }

        const userId = c.get('userId') as number;
        const isOwner = await savedPostModel.verifySavedPostOwner({ savedPostId: body.savedPostId, userId });
        console.log(`[Controller - deleteSavedPost] isOwner check result: ${isOwner}`);

        if (!isOwner) {
            return c.json({ success: false, data: null, error: "Unauthorized or post not found for deletion" }, 403);
        }

        const deletedPost = await savedPostModel.deleteSavedPost({ savedPostId: body.savedPostId });
        console.log(`[Controller - deleteSavedPost] Saved post deleted: ${deletedPost.savedPostId}`);

        return c.json({
            success: true,
            data: deletedPost,
            message: "Saved post deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting saved post:", error);
        return c.json({ success: false, data: null, error: "Failed to delete saved post" }, 500);
    }
};

export {
    createSavedPost,
    getSavedPostImage,
    getSavedPostTitle,
    getSavedPostTag,
    getSavedPostChecklist,
    deleteSavedPost
};

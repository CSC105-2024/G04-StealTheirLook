import type { Context } from "hono";
import * as savedPostModel from "../model/savedPostModel.js"; // Assuming this model expects parsed types where appropriate
import * as postModel from "../model/postModel.js";

// Type for the raw request body, postId might be a string from JSON
type RawCreateSavedPostBody = {
    postId: number | string; // Client might send as string "1" or number 1
};

// Type for the body passed to delete, savedPostId is a string
type DeleteSavedPostBody = {
    savedPostId: string;
};

const createSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<RawCreateSavedPostBody>();
        const userId = c.get('userId') as number; // Assuming userId from context is a number

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

        // Convert postId to a number
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

        // Check if post exists using the parsed number
        const postData = await postModel.getPostById({ postId: postIdAsNumber });
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
        // Assuming getSavedPostByUserAndPost expects postId as number (originalPost in schema is Int)
        const existing = await savedPostModel.getSavedPostByUserAndPost({
            userId,
            postId: postIdAsNumber
        });

        if (existing) {
            return c.json({
                success: true,
                data: existing,
                message: "Post already saved",
            });
        }

        // Get post details - all these expect postId as a number
        const [imageData, titleData, tagData, checklistData] = await Promise.all([
            postModel.getPostImage({ postId: postIdAsNumber }),
            postModel.getPostTitle({ postId: postIdAsNumber }),
            postModel.getPostTag({ postId: postIdAsNumber }),
            postModel.getPostChecklist({ postId: postIdAsNumber })
        ]);

        // Create the saved post
        // Assuming savedPostModel.createSavedPost expects 'postId' (or equivalent like 'originalPostId') as a number
        const savedPost = await savedPostModel.createSavedPost({
            userId,
            postId: postIdAsNumber, // This should map to 'originalPost: Int' in your SavedPost schema
            image: imageData,       // Ensure imageData, titleData etc. are in the format expected by createSavedPost
            title: titleData,
            tag: tagData,
            checklist: checklistData,
        });

        return c.json({
            success: true,
            data: {
                // Assuming 'savedPost' here is the result from the model,
                // which might be the new savedPost object or just its ID.
                // Adjust based on what savedPostModel.createSavedPost returns.
                savedPost: savedPost
            },
            message: "Post saved successfully",
        });
    } catch (error) {
        console.error("Error creating saved post:", error);
        // Provide more specific error messages if possible
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
                details: error.message // Optionally include more details in dev mode
            },
            statusCode
        );
    }
};

const getSavedPostImage = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId"); // This is a string
        if (!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        const userId = c.get('userId') as number; // Assuming userId from context is a number
        // verifySavedPostOwner likely expects savedPostId as string, userId as number
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized or post not found",
                },
                403 // Or 404 if you want to obscure existence
            );
        }

        // getSavedPostImage likely expects savedPostId as string
        const image = await savedPostModel.getSavedPostImage({ savedPostId });
        if (!image) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Saved post image not found",
                },
                404
            );
        }
        return c.json({ success: true, data: image });
    } catch (error) {
        console.error("Error getting saved post image:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post image",
            },
            500
        );
    }
};

const getSavedPostTitle = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId"); // This is a string
        if (!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        const userId = c.get('userId') as number;
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized or post not found",
                },
                403
            );
        }

        const title = await savedPostModel.getSavedPostTitle({ savedPostId });
        if (title === null || title === undefined) { // Check if title actually not found vs empty string
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Saved post title not found",
                },
                404
            );
        }
        return c.json({ success: true, data: title });
    } catch (error) {
        console.error("Error getting saved post title:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post title",
            },
            500
        );
    }
};

const getSavedPostTag = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId"); // This is a string
        if (!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        const userId = c.get('userId') as number;
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized or post not found",
                },
                403
            );
        }

        const tag = await savedPostModel.getSavedPostTag({ savedPostId });
        if (tag === null || tag === undefined) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Saved post tag not found",
                },
                404
            );
        }
        return c.json({ success: true, data: tag });
    } catch (error) {
        console.error("Error getting saved post tag:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post tag",
            },
            500
        );
    }
};

const getSavedPostChecklist = async (c: Context) => {
    try {
        const savedPostId = c.req.query("savedPostId"); // This is a string
        if (!savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        const userId = c.get('userId') as number;
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized or post not found",
                },
                403
            );
        }

        const checklist = await savedPostModel.getSavedPostChecklist({ savedPostId });
        // An empty checklist is valid, so usually no specific "not found" for the list itself,
        // unless the post itself wasn't found (handled by isOwner).
        return c.json({ success: true, data: checklist });
    } catch (error) {
        console.error("Error getting saved post checklist:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to get saved post checklist",
            },
            500
        );
    }
};

const deleteSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<DeleteSavedPostBody>(); // savedPostId is string here
        if (!body.savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Missing saved post ID",
                },
                400
            );
        }

        const userId = c.get('userId') as number;
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId: body.savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    data: null,
                    error: "Unauthorized or post not found for deletion",
                },
                403
            );
        }

        const deletedPost = await savedPostModel.deleteSavedPost({ savedPostId: body.savedPostId });
        return c.json({
            success: true,
            data: deletedPost, // Or a confirmation message
            message: "Saved post deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting saved post:", error);
        return c.json(
            {
                success: false,
                data: null,
                error: "Failed to delete saved post",
            },
            500
        );
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
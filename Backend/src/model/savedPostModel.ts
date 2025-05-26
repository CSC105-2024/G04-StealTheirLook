import { db } from '../index.js'
import { getPostChecklist } from './postModel.js'

export const createSavedPost = async (body: {
    userId: number
    postId: number
    image: any
    title: any
    tag: any
    checklist: any[]
}) => {
    try {
        // Create a unique ID for the saved post
        const savedPostId = `U${body.userId}P${body.postId}`;

        // Create the saved post
        const savedPost = await db.savedPost.create({
            data: {
                savedPostId,
                originalPost: body.postId,
                image: body.image?.image || '',
                title: body.title || '',
                tag: body.tag || '',
                userId: body.userId,
            },
        })

        // Create saved check items from the checklist
        if (body.checklist && body.checklist.length > 0) {
            await Promise.all(
                body.checklist.map((c) =>
                    db.savedCheck.create({
                        data: {
                            savedCheckId: `C${c.checkId}U${body.userId}`,
                            originalCheck: c.checkId,
                            brand: c.brand,
                            clothe: c.clothe,
                            savedPostId: savedPost.savedPostId,
                        },
                    })
                )
            )
        }

        return savedPost.savedPostId
    } catch (error) {
        console.error("Error in createSavedPost:", error);
        throw error;
    }
}

export const getSavedPostByUserAndPost = async (body: { userId: number, postId: number }) => {
    try {
        return await db.savedPost.findFirst({
            where: {
                userId: body.userId,
                originalPost: body.postId
            }
        });
    } catch (error) {
        console.error("Error in getSavedPostByUserAndPost:", error);
        throw error;
    }
}

export const verifySavedPostOwner = async (body: { savedPostId: string, userId: number }) => {
    try {
        const post = await db.savedPost.findUnique({
            where: {
                savedPostId: body.savedPostId,
                userId: body.userId
            }
        });
        return !!post;
    } catch (error) {
        console.error("Error in verifySavedPostOwner:", error);
        throw error;
    }
}

export const getSavedPostImage = async (body: { savedPostId: string }) => {
    try {
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { image: true },
        });
        return post?.image || null;
    } catch (error) {
        console.error("Error in getSavedPostImage:", error);
        throw error;
    }
}

export const getSavedPostTitle = async (body: { savedPostId: string }) => {
    try {
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { title: true },
        });
        return post?.title || null;
    } catch (error) {
        console.error("Error in getSavedPostTitle:", error);
        throw error;
    }
}

export const getSavedPostTag = async (body: { savedPostId: string }) => {
    try {
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { tag: true },
        });
        return post?.tag || null;
    } catch (error) {
        console.error("Error in getSavedPostTag:", error);
        throw error;
    }
}

export const getSavedPostChecklist = async (body: { savedPostId: string }) => {
    try {
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: {
                checkList: {
                    select: {
                        savedCheckId: true,
                        brand: true,
                        clothe: true,
                        completed: true
                    }
                }
            },
        });
        return post?.checkList || [];
    } catch (error) {
        console.error("Error in getSavedPostChecklist:", error);
        throw error;
    }
}

export const deleteSavedPost = async (body: { savedPostId: string }) => {
    try {
        // Delete all saved check items first
        await db.savedCheck.deleteMany({
            where: { savedPostId: body.savedPostId }
        });

        // Then delete the saved post
        return await db.savedPost.delete({
            where: { savedPostId: body.savedPostId }
        });
    } catch (error) {
        console.error("Error in deleteSavedPost:", error);
        throw error;
    }
}
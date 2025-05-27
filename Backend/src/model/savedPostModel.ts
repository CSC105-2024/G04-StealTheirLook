import { db } from '../index.js';

export const createSavedPost = async (body: {
    userId: number;
    postId: number;
    image: any;
    title: any;
    tag: any;
    checklist: {
        checkId: number;
        brand: string;
        clothe: string;
    }[];
}) => {
    try {
        const savedPostId = `U${body.userId}P${body.postId}`;
        console.log(`[Model - createSavedPost] Creating saved post with ID: ${savedPostId}`);

        // Create the saved post
        const savedPost = await db.savedPost.create({
            data: {
                savedPostId,
                originalPost: body.postId,
                // Ensure you're getting the actual image string, and use ?? '' for fallback
                image: body.image?.image ?? '',
                // Ensure you're getting the actual title string, and use ?? '' for fallback
                title: body.title ?? '',
                // Ensure you're getting the actual tag string, and use ?? '' for fallback
                tag: body.tag ?? '',
                userId: body.userId,
            },
        });
        console.log(`[Model - createSavedPost] Saved post created in DB:`, savedPost);


        // Create saved check items from the checklist
        if (body.checklist && body.checklist.length > 0) {
            const savedChecksData = body.checklist.map((c) => ({
                savedCheckId: `C${c.checkId}U${body.userId}`, // Ensure this ID is unique if needed
                originalCheck: c.checkId,
                brand: c.brand,
                clothe: c.clothe,
                savedPostId: savedPost.savedPostId,
            }));
            const createdChecks = await db.savedCheck.createMany({
                data: savedChecksData,
            });
            console.log(`[Model - createSavedPost] Created ${createdChecks.count} saved checks.`);
        } else {
            console.log(`[Model - createSavedPost] No checklist items to save.`);
        }

        return savedPost.savedPostId;
    } catch (error) {
        console.error('Error in createSavedPost:', error);
        throw error;
    }
};

export const getSavedPostByUserAndPost = async (body: { userId: number; postId: number }) => {
    try {
        console.log(`[Model - getSavedPostByUserAndPost] Querying for userId: ${body.userId}, originalPost: ${body.postId}`);
        const result = await db.savedPost.findFirst({
            where: {
                userId: body.userId,
                originalPost: body.postId,
            },
        });
        console.log(`[Model - getSavedPostByUserAndPost] Prisma result:`, result);
        return result;
    } catch (error) {
        console.error('Error in getSavedPostByUserAndPost:', error);
        throw error;
    }
};

export const verifySavedPostOwner = async (body: { savedPostId: string; userId: number }) => {
    try {
        console.log(`[Model - verifySavedPostOwner] Querying for savedPostId: ${body.savedPostId}, userId: ${body.userId}`);
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { userId: true },
        });
        console.log(`[Model - verifySavedPostOwner] Prisma result:`, post);
        return post?.userId === body.userId;
    } catch (error) {
        console.error('Error in verifySavedPostOwner:', error);
        throw error;
    }
};

export const getSavedPostImage = async (body: { savedPostId: string }) => {
    try {
        console.log(`[Model - getSavedPostImage] Querying for savedPostId: ${body.savedPostId}`);
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { image: true },
        });
        console.log(`[Model - getSavedPostImage] Prisma result:`, post);
        // FIX: Use ?? '' to return empty string if image is null/undefined, otherwise return the image string
        return post?.image ?? '';
    } catch (error) {
        console.error('Error in getSavedPostImage:', error);
        throw error;
    }
};

export const getSavedPostTitle = async (body: { savedPostId: string }) => {
    try {
        console.log(`[Model - getSavedPostTitle] Querying for savedPostId: ${body.savedPostId}`);
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { title: true },
        });
        console.log(`[Model - getSavedPostTitle] Prisma result:`, post);
        // FIX: Use ?? '' to return empty string if title is null/undefined, otherwise return the title string
        return post?.title ?? '';
    } catch (error) {
        console.error('Error in getSavedPostTitle:', error);
        throw error;
    }
};

export const getSavedPostTag = async (body: { savedPostId: string }) => {
    try {
        console.log(`[Model - getSavedPostTag] Querying for savedPostId: ${body.savedPostId}`);
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: { tag: true },
        });
        console.log(`[Model - getSavedPostTag] Prisma result:`, post);
        // FIX: Use ?? '' to return empty string if tag is null/undefined, otherwise return the tag string
        return post?.tag ?? '';
    } catch (error) {
        console.error('Error in getSavedPostTag:', error);
        throw error;
    }
};

export const getSavedPostChecklist = async (body: { savedPostId: string }) => {
    try {
        console.log(`[Model - getSavedPostChecklist] Querying for savedPostId: ${body.savedPostId}`);
        const post = await db.savedPost.findUnique({
            where: { savedPostId: body.savedPostId },
            select: {
                savedChecks: {
                    select: {
                        savedCheckId: true,
                        brand: true,
                        clothe: true,
                        completed: true,
                    },
                },
            },
        });
        console.log(`[Model - getSavedPostChecklist] Prisma result:`, post);
        return post?.savedChecks || [];
    } catch (error) {
        console.error('Error in getSavedPostChecklist:', error);
        throw error;
    }
};

export const deleteSavedPost = async (body: { savedPostId: string }) => {
    try {
        console.log(`[Model - deleteSavedPost] Deleting saved post with ID: ${body.savedPostId}`);
        // Delete all saved check items first
        await db.savedCheck.deleteMany({
            where: { savedPostId: body.savedPostId },
        });
        console.log(`[Model - deleteSavedPost] Deleted associated saved checks.`);

        // Then delete the saved post
        const deletedPost = await db.savedPost.delete({
            where: { savedPostId: body.savedPostId },
        });
        console.log(`[Model - deleteSavedPost] Deleted saved post:`, deletedPost);
        return deletedPost;
    } catch (error) {
        console.error('Error in deleteSavedPost:', error);
        throw error;
    }
};

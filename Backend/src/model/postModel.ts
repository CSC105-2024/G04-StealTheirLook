import { db } from '../index.js'

export const createPost = async (body: {
    image: string
    title: string
    tag: string
    userId: number
    items: { name: string; brand: string; id: string }[]
}) => {
    try {
        // Create the post
        const post = await db.post.create({
            data: {
                image: body.image,
                title: body.title,
                tag: body.tag,
                userId: body.userId
            },
        })

        // Create checklist items
        if (body.items && body.items.length > 0) {
            await Promise.all(
                body.items.map((item) =>
                    db.check.create({
                        data: {
                            brand: item.brand,
                            clothe: item.name,
                            postId: post.postId
                        },
                    })
                )
            )
        }

        return post
    } catch (error) {
        console.error('Error in createPost:', error)
        throw error
    }
}

export const getPost = async (body: { tags?: string[] }) => {
    try {
        if (!body.tags || body.tags.length === 0) {
            return await db.post.findMany({
                select: {
                    postId: true,
                    image: true,
                    title: true,
                    tag: true,
                    userId: true,
                    user: {
                        select: {
                            username: true,
                            profilePicture: true
                        }
                    }
                },
                orderBy: {
                    postId: 'desc'
                }
            })
        } else {
            return await db.post.findMany({
                where: { tag: { in: body.tags } },
                select: {
                    postId: true,
                    image: true,
                    title: true,
                    tag: true,
                    userId: true,
                    user: {
                        select: {
                            username: true,
                            profilePicture: true
                        }
                    }
                },
                orderBy: {
                    postId: 'desc'
                }
            })
        }
    } catch (error) {
        console.error('Error in getPost:', error)
        throw error
    }
}

export const getPostById = async (body: { postId: number }) => {
    try {
        return await db.post.findUnique({
            where: { postId: body.postId }
        })
    } catch (error) {
        console.error('Error in getPostById:', error)
        throw error
    }
}

export const getPostImage = async (body: { postId: number }) => {
    try {
        const post = await db.post.findUnique({
            where: { postId: body.postId },
            select: {
                image: true,
                userId: true,
                user: {
                    select: {
                        username: true,
                        profilePicture: true
                    }
                }
            }
        })
        return post
    } catch (error) {
        console.error('Error in getPostImage:', error)
        throw error
    }
}

export const getPostTitle = async (body: { postId: number }) => {
    try {
        const post = await db.post.findUnique({
            where: { postId: body.postId },
            select: { title: true }
        })
        return post?.title || null
    } catch (error) {
        console.error('Error in getPostTitle:', error)
        throw error
    }
}

export const getPostTag = async (body: { postId: number }) => {
    try {
        const post = await db.post.findUnique({
            where: { postId: body.postId },
            select: { tag: true }
        })
        return post?.tag || null
    } catch (error) {
        console.error('Error in getPostTag:', error)
        throw error
    }
}

export const getPostChecklist = async (body: { postId: number }) => {
    try {
        const post = await db.post.findUnique({
            where: { postId: body.postId },
            select: {
                checkList: {
                    select: {
                        checkId: true,
                        brand: true,
                        clothe: true,
                    }
                }
            },
        })
        return post?.checkList || []
    } catch (error) {
        console.error('Error in getPostChecklist:', error)
        throw error
    }
}

export const deletePost = async (body: { postId: number }) => {
    try {
        // Delete all checklist items first
        await db.check.deleteMany({
            where: { postId: body.postId }
        })

        // Then delete the post
        return await db.post.delete({
            where: { postId: body.postId }
        })
    } catch (error) {
        console.error('Error in deletePost:', error)
        throw error
    }
}

export const isSaved = async (body: { userId: number; postId: number }) => {
    try {
        return await db.savedPost.findFirst({
            where: {
                userId: body.userId,
                originalPost: body.postId
            },
            select: {
                savedPostId: true
            }
        })
    } catch (error) {
        console.error('Error in isSaved:', error)
        throw error
    }
}
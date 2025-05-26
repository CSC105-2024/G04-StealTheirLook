import { db } from '../index.js'

export const getUsername = async (body: { userId: number }) => {
    const user = await db.user.findUnique({
        where: { userId: body.userId },
        select: { username: true },
    })
    return user?.username || null
}

export const getUserProfilePicture = async (body: { userId: number }) => {
    const user = await db.user.findUnique({
        where: { userId: body.userId },
        select: { profilePicture: true },
    })
    return user?.profilePicture || null
}

export const getDisplayName = async (body: { userId: number }) => {
    const user = await db.user.findUnique({
        where: { userId: body.userId },
        select: { displayName: true },
    })
    return user?.displayName || null
}

export const getJoinDate = async (body: { userId: number }) => {
    const user = await db.user.findUnique({
        where: { userId: body.userId },
        select: { joinDate: true },
    })
    return user?.joinDate || null
}

export const getUserPost = async (body: { userId: number }) => {
    const user = await db.user.findUnique({
        where: { userId: body.userId },
        select: {
            posts: {
                select: {
                    postId: true,
                    image: true,
                    title: true,
                    tag: true,
                    userId: true,
                }
            }
        },
    })

    // Return an empty array if no posts found
    return user?.posts || []
}

export const getUserSavedPost = async (body: { userId: number }) => {
    const user = await db.user.findUnique({
        where: { userId: body.userId },
        select: {
            savedPosts: {
                select: {
                    savedPostId: true,
                    originalPost: true,
                    image: true,
                    title: true,
                    tag: true,
                    userId: true,
                }
            }
        },
    })

    // Return an empty array if no saved posts found
    return user?.savedPosts || []
}

export const updateProfilePicture = async (body: { userId: number; profilePicture: string }) => {
    try {
        const updated = await db.user.update({
            where: { userId: body.userId },
            data: { profilePicture: body.profilePicture },
            select: {
                userId: true,
                username: true,
                displayName: true,
                profilePicture: true,
            }
        })
        return { success: true, data: updated }
    } catch (error) {
        console.error('Error updating profile picture:', error)
        return { success: false, error: 'Failed to update profile picture' }
    }
}

export const updateDisplayName = async (body: { userId: number; displayName: string }) => {
    try {
        const updated = await db.user.update({
            where: { userId: body.userId },
            data: { displayName: body.displayName },
            select: {
                userId: true,
                username: true,
                displayName: true,
                profilePicture: true,
            }
        })
        return { success: true, data: updated }
    } catch (error) {
        console.error('Error updating display name:', error)
        return { success: false, error: 'Failed to update display name' }
    }
}
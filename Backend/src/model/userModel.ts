import { db } from '../index.js'

export const getUsername = (body: { userId: number }) =>
    db.user.findUnique({
        where: { userId: body.userId },
        select: { username: true },
    })

export const getUserProfilePicture = (body: { userId: number }) =>
    db.user.findUnique({
        where: { userId: body.userId },
        select: { profilePicture: true },
    })

export const getDisplayName = (body: { userId: number }) =>
    db.user.findUnique({
        where: { userId: body.userId },
        select: { displayName: true },
    })

export const getJoinDate = (body: { userId: number }) =>
    db.user.findUnique({
        where: { userId: body.userId },
        select: { joinDate: true },
    })

export const getUserPost = (body: { userId: number }) =>
    db.user.findUnique({
        where: { userId: body.userId },
        select: { post: true },
    })

export const getUserSavedPost = (body: { userId: number }) =>
    db.user.findUnique({
        where: { userId: body.userId },
        select: { savedPost: true },
    })

export const updateProfilePicture = (body: { userId: number; image: string }) =>
    db.user.update({
        where: { userId: body.userId },
        data:  { profilePicture: body.image },
    })

export const updateDisplayName = (body: { userId: number; displayName: string }) =>
    db.user.update({
        where: { userId: body.userId },
        data:  { displayName: body.displayName },
    })
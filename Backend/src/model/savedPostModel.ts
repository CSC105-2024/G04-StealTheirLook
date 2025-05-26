import { db } from '../index.js'
import { getPostChecklist } from './postModel.js'

export const createSavedPost = async (body: {
    userId: number
    postId: number
    image: { image: string }
    title: { title: string }
    tag: { tag: string }
}) => {
    const savedPost = await db.savedPost.create({
        data: {
            savedPostId: `U${body.userId}P${body.postId}`,
            originalPost: body.postId,
            image: body.image.image,
            title: body.title.title,
            tag: body.tag.tag,
            userId: body.userId,
        },
    })

    const checklist = await getPostChecklist({ postId: body.postId })

    await Promise.all(
        checklist.map((c) =>
            db.savedCheck.create({
                data: {
                    savedCheckId: `U${body.userId}C${c.checkId}`,
                    originalCheck: c.checkId,
                    brand: c.brand,
                    clothe: c.clothe,
                    savedPostId: savedPost.savedPostId,
                },
            })
        )
    )

    return savedPost.savedPostId
}

export const getSavedPostImage = (body: { savedPostId: string }) =>
    db.savedPost.findUnique({
        where: { savedPostId: body.savedPostId },
        select: { image: true },
    })

export const getSavedPostTitle = (body: { savedPostId: string }) =>
    db.savedPost.findUnique({
        where: { savedPostId: body.savedPostId },
        select: { title: true },
    })

export const getSavedPostTag = (body: { savedPostId: string }) =>
    db.savedPost.findUnique({
        where: { savedPostId: body.savedPostId },
        select: { tag: true },
    })

export const getSavedPostChecklist = (body: { savedPostId: string }) =>
    db.savedPost.findUnique({
        where: { savedPostId: body.savedPostId },
        select: { checkList: true },
    })

export const deleteSavedPost = async (body: { savedPostId: string }) => {
    await db.savedCheck.deleteMany({ where: { savedPostId: body.savedPostId } })
    return db.savedPost.delete({ where: { savedPostId: body.savedPostId } })
}
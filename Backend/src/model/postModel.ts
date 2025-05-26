import { db } from '../index.js'

export const createPost = async (body: {
    image: string
    title: string
    tag: string
    userId: number
    checklist: { brand: string; clothe: string }[]
}) => {
    const post = await db.post.create({
        data: { image: body.image, title: body.title, tag: body.tag, userId: body.userId },
    })

    await Promise.all(
        body.checklist.map((item) =>
            db.check.create({
                data: { brand: item.brand, clothe: item.clothe, postId: post.postId },
            })
        )
    )

    return post
}

export const getPost = async (body: { tags: string[] }) =>
    body.tags.length === 0
        ? db.post.findMany()
        : db.post.findMany({ where: { tag: { in: body.tags } } })

export const getPostImage = (body: { postId: number }) =>
    db.post.findFirst({ where: { postId: body.postId }, select: { image: true } })

export const getPostTitle = (body: { postId: number }) =>
    db.post.findFirst({ where: { postId: body.postId }, select: { title: true } })

export const getPostTag = (body: { postId: number }) =>
    db.post.findFirst({ where: { postId: body.postId }, select: { tag: true } })

export const getPostChecklist = async (body: { postId: number }) => {
    const checklist = await db.post.findFirst({
        where: { postId: body.postId },
        select: { checkList: true },
    })
    return checklist?.checkList ?? []
}

export const deletePost = async (body: { postId: number }) => {
    await db.check.deleteMany({ where: { postId: body.postId } })
    return db.post.delete({ where: { postId: body.postId } })
}

export const isSaved = (body: { userId: number; postId: number }) =>
    db.savedPost.findFirst({
        where: { userId: body.userId, originalPost: body.postId },
    })
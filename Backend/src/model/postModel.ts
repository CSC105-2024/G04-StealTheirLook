import { db } from "../index.js"

const createPost = async(body: any) => {
    const post = await db.post.create({
        data : {
            image: body.image,
            title: body.title,
            tag: body.tag,
            userId: body.userId,
        }
    })

    const postId = post.postId

    for(const ele of body.checklist) {
        const check = await db.check.create({
            data : {
                brand: ele.brand,
                clothe: ele.clothe,
                postId: postId,
            }
        })
    }

    return post
}

const getPostImage = async(body: any) => {
    const image = await db.post.findFirst({
        where: {
            postId: body.postId,
        },
        select: {
            image: true
        }
    })

    return image
}

const getPostTitle = async(body: any) => {
    const title = await db.post.findFirst({
        where: {
            postId: body.postId,
        },
        select: {
            title: true
        }
    })

    return title
}

const getPostTag = async(body: any) => {
    const tag = await db.post.findFirst({
        where: {
            postId: body.postId,
        },
        select: {
            tag: true
        }
    })

    return tag
}

const getPostChecklist = async(body: any) => {
    const checklist = await db.post.findFirst({
        where: {
            postId: body.postId,
        },
        select: {
            checkList: true
        }
    })

    // @ts-ignore
    const c = checklist.checkList
    return c
}

const deletePost = async(body: any) => {
    const deleteCheck = await db.check.deleteMany({
        where : {
            postId: body.postId,
        }
    })

    const deletePost = await db.post.delete({
        where : {
            postId: body.postId,
        }
    })

    return deletePost
}

const isSaved = async(body: any) => {
    const findPost = await db.savedPost.findFirst({
        where : {
            userId: body.userId,
            originalPost: body.postId,
        }
    })

    return findPost
}

export { createPost,
        getPostImage, getPostTitle, getPostTag, getPostChecklist,
        deletePost,
        isSaved}
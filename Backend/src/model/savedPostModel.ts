import { db } from "../index.js"
import { getPostChecklist } from "./postModel.js";

const createSavedPost = async(body: any) => {
    const savedPost = await db.savedPost.create({
        data : {
            savedPostId : "U" + body.userId + "P" + body.postId,
            originalPost: body.postId,
            image: body.image.image,
            title: body.title.title,
            tag: body.tag.tag,
            userId: body.userId,
        }
    })

    const savedPostId = savedPost.savedPostId

    const checklist = await getPostChecklist(body.postId)

    // @ts-ignore
    for(const ele of checklist) {
        const check = await db.savedCheck.create({
            data : {
                savedCheckId : "U" + body.userId + "C" + ele.checkId,
                originalCheck: ele.checkId,
                brand: ele.brand,
                clothe: ele.clothe,
                savedPostId: savedPostId,
            }
        })
    }

    return savedPostId
}

const getSavedPostImage = async(body: any) => {
    const image = await db.savedPost.findFirst({
        where: {
            savedPostId: body.savedPostId,
        },
        select: {
            image: true
        }
    })

    return image
}

const getSavedPostTitle = async(body: any) => {
    const title = await db.savedPost.findFirst({
        where: {
            savedPostId: body.savedPostId,
        },
        select: {
            title: true
        }
    })

    return title
}

const getSavedPostTag = async(body: any) => {
    const tag = await db.savedPost.findFirst({
        where: {
            savedPostId: body.savedPostId,
        },
        select: {
            tag: true
        }
    })

    return tag
}

const getSavedPostChecklist = async(body: any) => {
    const checklist = await db.savedPost.findFirst({
        where: {
            savedPostId: body.savedPostId,
        },
        select: {
            checkList: true
        }
    })

    return checklist
}

const deleteSavedPost = async(body: any) => {
    const deleteSavedCheck = await db.savedCheck.deleteMany({
        where : {
            savedPostId: body.savedPostId,
        }
    })

    const deleteSavedPost = await db.savedPost.delete({
        where : {
            savedPostId: body.savedPostId,
        }
    })

    return deleteSavedPost
}

export { createSavedPost,
        getSavedPostTitle, getSavedPostImage, getSavedPostTag, getSavedPostChecklist,
        deleteSavedPost }
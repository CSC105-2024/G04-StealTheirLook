import type { Context } from "hono";
import * as savedPostModel from "../model/savedPostModel.js"
import * as postModel from "../model/postModel.js"

type createSavedPost = {
    userId: number,
    postId: number,
}

type deleteSavedPost = {
    savedPostId: string,
}

const createSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<createSavedPost>()
        if(!body.userId || !body.postId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const savedPost = await savedPostModel.createSavedPost({
            userId: body.userId,
            postId: body.postId,
            image: await postModel.getPostImage(body),
            title: await postModel.getPostTitle(body),
            tag: await postModel.getPostTag(body),
            checklist: await postModel.getPostChecklist(body),
        });
        return c.json({
            success: true,
            data: savedPost,
            msg: "saved a post",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

const getSavedPostImage = async (c: Context) => {
    try {
        const body = await c.req.query("savedPostId")
        if(body == null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const image = await savedPostModel.getSavedPostImage({body})
        return c.json({
            success: true,
            data: image,
            msg: "got saved post image",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

const getSavedPostTitle = async (c: Context) => {
    try {
        const body = await c.req.query("savedPostId")
        if(body == null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const title = await savedPostModel.getSavedPostTitle({body});
        return c.json({
            success: true,
            data: title,
            msg: "got saved post title",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

const getSavedPostTag = async (c: Context) => {
    try {
        const body = await c.req.query("savedPostId")
        if(body == null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const tag = await savedPostModel.getSavedPostTag({body});
        return c.json({
            success: true,
            data: tag,
            msg: "got saved post tag",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

const getSavedPostChecklist = async (c: Context) => {
    try {
        const body = await c.req.query("savedPostId")
        if(body == null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const checklist = await savedPostModel.getSavedPostChecklist({body});
        return c.json({
            success: true,
            data: checklist,
            msg: "got saved post checklist",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

const deleteSavedPost = async (c: Context) => {
    try {
        const body = await c.req.json<deleteSavedPost>()
        if(!body.savedPostId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const deleteSavedPost = await savedPostModel.deleteSavedPost(body)
        return c.json({
            success: true,
            data: deleteSavedPost,
            msg: "deleted a saved post",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

export { createSavedPost,
        getSavedPostImage, getSavedPostTitle, getSavedPostTag, getSavedPostChecklist,
        deleteSavedPost };
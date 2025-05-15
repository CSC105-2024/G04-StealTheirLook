import type { Context } from "hono";
import * as postModel from "../model/postModel.js"

type createPost = {
    image: string,
    title: string,
    tag: string,
    userId: number
    checklist: string[]
}

type deletePost = {
    postId: number,
}

const createPost = async (c: Context) => {
    try {
        const body = await c.req.json<createPost>()
        if(!body.image || !body.title || !body.tag || !body.userId || body.checklist.length === 0 ) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const post = await postModel.createPost(body);
        return c.json({
            success: true,
            data: post,
            msg: "created post",
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

const getPostImage = async (c: Context) => {
    try {
        const body = await c.req.query("postId")
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

        const image = await postModel.getPostImage({body});
        return c.json({
            success: true,
            data: image,
            msg: "got post image",
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

const getPostTitle = async (c: Context) => {
    try {
        const body = await c.req.query("postId")
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

        const title = await postModel.getPostTitle({body});
        return c.json({
            success: true,
            data: title,
            msg: "got post title",
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

const getPostTag = async (c: Context) => {
    try {
        const body = await c.req.query("postId")
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

        const tag = await postModel.getPostTag({body});
        return c.json({
            success: true,
            data: tag,
            msg: "got post tag",
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

const getPostChecklist = async (c: Context) => {
    try {
        const postId = await c.req.query("postId")
        const userId = await c.req.query("userId")
        if(postId == null || userId == null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const checklist = await postModel.getPostChecklist({
            postId: Number(postId),
            userId: Number(userId)
        });
        return c.json({
            success: true,
            data: checklist,
            msg: "got post checklist",
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

const deletePost = async (c: Context) => {
    try {
        const body = await c.req.json<deletePost>()
        if(!body.postId) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const deletePost = await postModel.deletePost(body)
        return c.json({
            success: true,
            data: deletePost,
            msg: "deleted a post",
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

export { createPost,
        getPostImage, getPostTitle, getPostTag, getPostChecklist,
        deletePost };
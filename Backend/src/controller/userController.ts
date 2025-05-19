import type { Context } from "hono";
import * as userModel from "../model/userModel.js"

type createUser = {
    username: string,
    password: string,
}

type updateProfilePicture = {
    userId: number,
    image: string
}

type updateDisplayName = {
    userId: number,
    displayName: string,
}

const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUser>()
        if(!body.username || !body.password ) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const user = await userModel.createUser(body);
        return c.json({
            success: true,
            data: user,
            msg: "created user",
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

const getUsername = async (c: Context) => {
    try {
        const body = await c.req.query("userId")
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

        const username = await userModel.getUsername({body})
        return c.json({
            success: true,
            data: username,
            msg: "got username",
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

const getUserProfilePicture = async (c: Context) => {
    try {
        const body = await c.req.query("userId")
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

        const pfp = await userModel.getUserProfilePicture({body})
        return c.json({
            success: true,
            data: pfp,
            msg: "got profile picture",
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

const getDisplayName = async (c: Context) => {
    try {
        const body = await c.req.query("userId")
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

        const displayName = await userModel.getDisplayName({body})
        return c.json({
            success: true,
            data: displayName,
            msg: "got display name",
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

const getJoinDate = async (c: Context) => {
    try {
        const body = await c.req.query("userId")
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

        const joinDate = await userModel.getJoinDate({body})
        return c.json({
            success: true,
            data: joinDate,
            msg: "got join Date",
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

const getUserPost = async (c: Context) => {
    try {
        const body = await c.req.query("userId")
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

        const post = await userModel.getUserPost({body})
        return c.json({
            success: true,
            data: post,
            msg: "got user's post",
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

const getUserSavedPost = async (c: Context) => {
    try {
        const body = await c.req.query("userId")
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

        const savedPost = await userModel.getUserSavedPost({body})
        return c.json({
            success: true,
            data: savedPost,
            msg: "got user's saved post",
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

const updateProfilePicture = async (c: Context) => {
    try {
        const body = await c.req.json<updateProfilePicture>()
        if(!body.userId || !body.image) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const profilePicture = await userModel.updateProfilePicture(body)
        return c.json({
            success: true,
            data: profilePicture,
            msg: "updated profile picture",
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

const updateDisplayName = async (c: Context) => {
    try {
        const body = await c.req.json<updateDisplayName>()
        if(!body.userId || !body.displayName) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const displayName = await userModel.updateDisplayName(body)
        return c.json({
            success: true,
            data: displayName,
            msg: "updated display name",
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

export { createUser,
        getUsername, getUserProfilePicture, getDisplayName, getJoinDate, getUserPost, getUserSavedPost,
        updateProfilePicture, updateDisplayName};
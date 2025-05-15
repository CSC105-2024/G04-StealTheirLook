import { db } from "../index.js"

const createUser = async(body: any) => {

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();

    const user = await db.user.create({
        data : {
            username : body.username,
            password : body.password,
            displayName : body.username,
            profilePicture : "",
            joinDate : month[d.getMonth()] + " " + d.getFullYear(),
        }
    })

    return user
}

const getUsername = async(body: any) => {
    const username = await db.user.findFirst({
        where : {
            userId : body.userId
        },
        select : {
            username : true
        }
    })

    return username
}

const getUserProfilePicture = async(body: any) => {
    const profilePicture = await db.user.findFirst({
        where : {
            userId : body.userId
        },
        select : {
            profilePicture : true
        }
    })

    return profilePicture
}

const getDisplayName = async(body: any) => {
    const displayName = await db.user.findFirst({
        where : {
            userId : body.userId
        },
        select : {
            displayName : true
        }
    })

    return displayName
}

const getUserPost = async(body: any) => {
    const posts = await db.user.findFirst({
        where : {
            userId : body.userId
        },
        select : {
            post : true
        }
    })

    return posts
}

const getUserSavedPost = async(body: any) => {
    const savedPost = await db.user.findFirst({
        where : {
            userId : body.userId
        },
        select : {
            savedPost : true
        }
    })

    return savedPost;
}

const updateProfilePicture = async(body: any) => {
    const profilePicture = await db.user.update({
        where : {
            userId : body.userId
        },
        data : {
            profilePicture : body.image
        }
    })

    return profilePicture
}

const updateDisplayName = async(body: any) => {
    const name = db.user.update({
        where : {
            userId : body.userId
        },
        data : {
            displayName : body.displayName
        }
    })

    return name
}

export { createUser,
        getUsername, getUserProfilePicture, getDisplayName, getUserPost, getUserSavedPost,
        updateProfilePicture, updateDisplayName}

import axios from "axios";

const user = axios.create({
    baseURL: "http://localhost:8000/user",
    withCredentials: true,
})

const post = axios.create({
    baseURL: "http://localhost:8000/post",
    withCredentials: true,
})

const check =  axios.create({
    baseURL: "http://localhost:8000/check",
    withCredentials: true,
})

const savedPost = axios.create({
    baseURL: "http://localhost:8000/savedPost",
    withCredentials: true,
})

const savedCheck = axios.create({
    baseURL: "http://localhost:8000/savedCheck",
    withCredentials: true,
})

// User APIs
export const createUser = async(body) => {
    try {
        const res = await user.post('/createUser', body)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getUsername = async(body) => {
    try {
        const res = await user.get(`/getUsername?userId=${body.userId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getProfilePicture = async(body) => {
    try {
        const res = await user.get(`/getProfilePicture?userId=${body.userId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getDisplayName = async(body) => {
    try {
        const res = await user.get(`/getDisplayName?userId=${body.userId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getJoinDate = async(body) => {
    try {
        const res = await user.get(`/getJoinDate?userId=${body.userId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getUserPost =  async(body) => {
    try {
        const res = await user.get(`/getPost?userId=${body.userId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getSavedPost = async(body) => {
    try {
        const res = await user.get(`/getSavedPost?userId=${body.userId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const updateProfilePicture = async(body) => {
    try {
        const res = await user.patch('/updateProfilePicture', body)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const updateDisplayName = async(body) => {
    try {
        const res = await user.patch('/updateDisplayName', body)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

// Post API
export const createPost = async(body) => {
    try {
        const res = await post.post('/createPost', body)
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getPost = async(body) => {
    try {
        const res = await post.patch('/getPosts', body)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getPostImage = async(body) => {
    try {
        const res = await post.get(`/getPostImage?postId=${body.postId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getPostTitle = async(body) => {
    try {
        const res = await post.get(`/getPostTitle?postId=${body.postId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getPostTag = async(body) => {
    try {
        const res = await post.get(`/getPostTag?postId=${body.postId}`)
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getPostChecklist = async(body) => {
    try {
        const res = await post.get(`/postCheckList?postId=${body.postId}`)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const deletePost = async(body) => {
    try {
        const res = await post.delete('/deletePost', body)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const isSaved = async(body) => {
    try {
        const res = await post.get(`/isSaved?userId=${body.userId}&postId=${body.postId}`)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

//savedPost API
export const createSavedPost = async(body) => {
    try {
        const res =  await savedPost.post('/createSavedPost', body)
        return res.data;
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getSavedPostImage = async(body) => {
    try {
        const res = await savedPost.get(`/getSavedPostImage?savedPostId=${body.savedPostId}`)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getSavedPostTitle = async(body) => {
    try {
        const res = await savedPost.get(`/getSavedPostTitle?savedPostId=${body.savedPostId}`)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getSavedPostTag = async(body) => {
    try {
        const res = await savedPost.get(`/getSavedPostTag?savedPostId=${body.savedPostId}`)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const getSavedPostChecklist = async(body) => {
    try {
        const res = await savedPost.get(`/getSavedPostChecklist?savedPostId=${body.savedPostId}`)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const deleteSavedPost = async(body) => {
    try {
        const res = await savedPost.delete('/deleteSavedPost', body)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

// savedCheck API
export const updateCheck = async(body) => {
    try {
        const res = await savedCheck.patch('/updateCheck', body)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

// check API
export const editCheckBrand = async(body) => {
    try {
        const res = await check.patch('/editCheckBrand', body)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}

export const editCheckClothe = async(body) => {
    try {
        const res = await check.patch('/editCheckClothe', body)
        return res.data
    }
    catch (error) {
        return { success: false, data: [], error: error };
    }
}
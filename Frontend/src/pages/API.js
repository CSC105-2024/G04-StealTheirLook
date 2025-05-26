// src/api.js
import axios from 'axios'

/* ------------------------------------------------------------------ */
/* 1. Axios instance with automatic JWT & basic error-wrapper          */
/* ------------------------------------------------------------------ */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
    withCredentials: true,               // keeps you compatible if you later switch to cookies
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

/* Optional:   central response / error logging
api.interceptors.response.use(
  (r) => r,
  (err) => {
    console.error(err?.response?.data ?? err)
    return Promise.reject(err)
  }
)
*/

/* Helper to unwrap `data` or map error into a uniform object */
const handle = async (promise) => {
    try {
        const res = await promise
        return { success: true, data: res.data }
    } catch (error) {
        return {
            success: false,
            data: null,
            error: error?.response?.data?.message ?? error.message,
        }
    }
}

/* ------------------------------------------------------------------ */
/* 2. AUTH                                                             */
/* ------------------------------------------------------------------ */
export const registerUser = (body) => handle(api.post('/auth/register', body))
export const loginUser    = (body) => handle(api.post('/auth/login', body))
export const getMe        = ()     => handle(api.get('/auth/me'))

/* --- keep old name for backwards-compatibility -------------------- */
export const createUser = registerUser   // alias

/* ------------------------------------------------------------------ */
/* 3. USER ROUTE (protected)                                           */
/* ------------------------------------------------------------------ */
export const getUsername        = (userId)              =>
    handle(api.get('/user/getUsername',        { params: { userId } }))

export const getProfilePicture  = (userId)              =>
    handle(api.get('/user/getProfilePicture',  { params: { userId } }))

export const getDisplayName     = (userId)              =>
    handle(api.get('/user/getDisplayName',     { params: { userId } }))

export const getJoinDate        = (userId)              =>
    handle(api.get('/user/getJoinDate',        { params: { userId } }))

export const getUserPost        = (userId)              =>
    handle(api.get('/user/getPost',            { params: { userId } }))

export const getSavedPost       = (userId)              =>
    handle(api.get('/user/getSavedPost',       { params: { userId } }))

export const updateProfilePicture = (body) => handle(api.patch('/user/updateProfilePicture', body))
export const updateDisplayName    = (body) => handle(api.patch('/user/updateDisplayName',  body))

/* ------------------------------------------------------------------ */
/* 4. POST ROUTE (protected)                                           */
/* ------------------------------------------------------------------ */
export const createPost         = (body)      => handle(api.post('/post/createPost',  body))
export const getPost            = (body)      => handle(api.patch('/post/getPosts',   body))
export const getPostImage       = (postId)    => handle(api.get('/post/getPostImage',   { params: { postId } }))
export const getPostTitle       = (postId)    => handle(api.get('/post/getPostTitle',   { params: { postId } }))
export const getPostTag         = (postId)    => handle(api.get('/post/getPostTag',     { params: { postId } }))
export const getPostChecklist   = (postId)    => handle(api.get('/post/postCheckList',  { params: { postId } }))
export const deletePost         = (body)      => handle(api.delete('/post/deletePost',  { data: body }))
export const isSaved            = (userId,postId) =>
    handle(api.get('/post/isSaved', { params: { userId, postId } }))

/* ------------------------------------------------------------------ */
/* 5. SAVED-POST ROUTE (protected)                                     */
/* ------------------------------------------------------------------ */
export const createSavedPost        = (body)           => handle(api.post   ('/savedPost/createSavedPost',  body))
export const getSavedPostImage      = (savedPostId)    => handle(api.get    ('/savedPost/getSavedPostImage',     { params: { savedPostId } }))
export const getSavedPostTitle      = (savedPostId)    => handle(api.get    ('/savedPost/getSavedPostTitle',     { params: { savedPostId } }))
export const getSavedPostTag        = (savedPostId)    => handle(api.get    ('/savedPost/getSavedPostTag',       { params: { savedPostId } }))
export const getSavedPostChecklist  = (savedPostId)    => handle(api.get    ('/savedPost/getSavedPostChecklist', { params: { savedPostId } }))
export const deleteSavedPost        = (body)           => handle(api.delete ('/savedPost/deleteSavedPost',       { data: body }))

/* ------------------------------------------------------------------ */
/* 6. SAVED-CHECK ROUTE (protected)                                    */
/* ------------------------------------------------------------------ */
export const updateCheck = (body) => handle(api.patch('/savedCheck/updateCheck', body))

/* ------------------------------------------------------------------ */
/* 7. CHECK ROUTE (protected)                                          */

export const editCheckBrand  = (body) => handle(api.patch('/check/editCheckBrand',  body))
export const editCheckClothe = (body) => handle(api.patch('/check/editCheckClothe', body))


export default api
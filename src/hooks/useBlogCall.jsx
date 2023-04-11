import { useDispatch } from "react-redux";
import {
    fetchStart,
    getSuccess,
    getDetailSuccess,
    fetchFail
} from "../features/blogSlice"
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom";
const useBlogCall = ()=>{
    const dispatch = useDispatch()
    const {axiosWithToken, axiosPublic} = useAxios()
    //Get Blogs
    const getBlogData = async(url)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosPublic(
                `api/${url}/`
            )
           dispatch(getSuccess({data, url}))
           //url.includes('/') && dispatch(getDetailSuccess({data}))
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    //
    //post blog
    const postBlogData = async (url, info)=>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`api/${url}/`,info)
            getBlogData("blogs")
            toastSuccessNotify(`${url} successfuly posted`)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} can not be posted`)
        }
    }
    //
    //get detail
    const getDetailData = async (url)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(`api/${url}/`)
            dispatch(getDetailSuccess({data}))
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    //
    //like
    const AddLike = async (url)=>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`api/${url}/`)
            getBlogData("blogs")
        } catch (error) {
        }
    }
    //
    //addComment
    const addComment = async (url, data)=>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`api/${url}/`, data)
            getDetailData(`blogs/${data.post}`)
            toastSuccessNotify("Comment is successfuly added")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Comment can not be added")
        }
    }
    //
    //delete blog
    const navigate = useNavigate()
    const deleteBlog = async (url)=>{
        // console.log(url)
        try {
            await axiosWithToken.delete(`api/${url}`)
            navigate("/")
            toastSuccessNotify("Blog successfuly deleted")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(error.message)
        }
    }
    //
    //edit blog
    const putBlogData = async (url,id,info)=>{
    }
    return {getBlogData, postBlogData,getDetailData,AddLike,addComment,deleteBlog,putBlogData}
}
export default useBlogCall
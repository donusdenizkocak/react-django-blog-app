import { useDispatch } from "react-redux";
import {
    fetchStart,
    getSuccess,
    getDetailSuccess,
    fetchFail
} from "../features/blogSlice"
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCall = ()=>{
    const dispatch = useDispatch()

    const {axiosWithToken, axiosPublic} = useAxios()

    //Blogs
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
    // get detail
const getDetailData = async(url) =>{
    dispatch(fetchStart())
    try {
       const {data}  = await axiosWithToken(`api/${url}`)
       dispatch(getDetailSuccess({data}))
    } catch (error) {
        dispatch(fetchFail)
    }
}


    

    return {getBlogData, postBlogData,getDetailData}
}
export default useBlogCall
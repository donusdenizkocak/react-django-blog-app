import { useDispatch } from "react-redux";
import {
    fetchStart,
    getSuccess,
    getDetailSuccess,
    fetchFail
} from "../features/blogSlice"
import useAxios from "./useAxios";

const useBlogCall = ()=>{
    const dispatch = useDispatch()

    const {axiosWithToken} = useAxios()

    //Blogs
    const getBlogData = async(url)=>{
       
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(
                `api/${url}/`
            )         
            
           url.includes('/') || dispatch(getSuccess({data, url}))
           url.includes('/') && dispatch(getDetailSuccess({data}))
            
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    //detail
    // const getBlogDetail = async(url)=>{
    //     const controlUrl = url.includes('/')
    //     dispatch(fetchStart())
    //     try {
    //         const {data} = await axiosWithToken(
    //             `api/${url}/`
    //         )           
    //         //console.log("sss:"+controlUrl)
    //         (controlUrl ? dispatch(getDetailSuccess({data})) : dispatch(getSuccess({data, url})))
            
    //     } catch (error) {
    //         dispatch(fetchFail())
    //     }
    // }


    return {getBlogData}
}
export default useBlogCall
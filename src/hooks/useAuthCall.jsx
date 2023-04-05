import axios from "axios"

import {fetchStart,getSuccess,fetchFail,loginSuccess,registerSuccess, logoutSuccess} from "../features/authSlice"
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useAuthCall =() =>{
    const dispatch =useDispatch()
    const naigate= useNavigate()
    const BASE_URL = "http://32338.fullstack.clarusway.com/api/blogs/";

    const login = async(userInfo)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${BASE_URL}users/login/`,userInfo)
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login performed")
            navigate(-1)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("login can not be performed")
        }
    }
    //logout
    const logout = async()=>{
        dispatch(fetchStart())
        try {
            await axios.post(`${BASE_URL}users/auth/logout/`)
            dispatch(logoutSuccess)
            toastSuccessNotify("Logout performed")
            navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Logout can not be performed")
        }
    }

    //register
    const register = async()=>{
        dispatch(fetchStart())
    try {
        const {data} = await axios.post(`${BASE_URL}users/register/`,userInfo)
        dispatch(registerSuccess(data))
        toastSuccessNotify("Register performed")
        navigate("/")
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify("Register can not be performed")
    }
    }

    return {login,register,logout}
}
export default useAuthCall
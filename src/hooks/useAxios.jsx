import axios from "axios"

const useAxios = () => {
    const token ="e926fd4f3c1132918e31936606f791ddae6c3670"
    const axiosPublic = axios.create({
        baseURL: "http://32338.fullstack.clarusway.com/"
    })

    const axiosWithToken = axios.create({
        baseURL: "http://32338.fullstack.clarusway.com/",
        headers:{Authorization: `Token ${token}`}
    })
    return {axiosPublic, axiosWithToken}
}
export default useAxios

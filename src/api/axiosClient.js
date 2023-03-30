import axios from "axios";
import queryString from "query-string"
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "Content-Type" :"application-json"
    },
    paramsSerializer: {
        serialize: (params) => {
           return queryString.stringify({...params, api_key: apiConfig.apiKey})
        }
    }

})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(res => {
    if(res && res.data){
        return res.data
    }
    return res
},
    err => {
    throw(err)}
)

export default axiosClient
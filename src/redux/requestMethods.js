import axios from "axios"


const BASE_URL = "https://fakestoreapi.com"

export const publicRequest = axios.create({
    baseURL : BASE_URL
})
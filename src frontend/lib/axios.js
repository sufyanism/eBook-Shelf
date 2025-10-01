import axios from "axios"

export const axiosInstance = new axios.create({
    baseURL:import.meta.env.MODE === "development"?"http://localhost:5000":"https://book-shelf-backend-dhuo.onrender.com",
    withCredentials:true,
})
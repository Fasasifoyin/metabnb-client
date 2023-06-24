import axios from "axios"

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

export const register = (form) => API.post("/api/import/register", form)
export const login = (form) => API.post("/api/import/login", form)
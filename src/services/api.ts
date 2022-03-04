import axios from "axios";

const api = axios.create({
    baseURL: 'https://dtmoney-ignite-reactjs.vercel.app'
})

export default api;
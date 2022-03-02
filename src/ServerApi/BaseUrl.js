import axios from "axios";


export const BaseUrl = () => axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/',
})
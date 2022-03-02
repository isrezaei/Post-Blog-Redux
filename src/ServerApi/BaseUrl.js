import axios from "axios";

export const GetData = () => axios.create({
    baseURL : `https://api.freerealapi.com/`,
    timeout : 100000,
})
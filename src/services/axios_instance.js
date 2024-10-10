import axios from "axios";
// const BASE_URL_FAKE = `https://dummyjson.com`;
const BASE_URL = `https://localhost:5196`;
export default axios.create({
    baseURL: BASE_URL
});
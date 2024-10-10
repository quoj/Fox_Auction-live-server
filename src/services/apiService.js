import axios_instance from "./axios_instance";

export const getProducts = async ()=>{ 
    const url = `/products?limit=12`;
    try {
        const rs = await axios_instance.get(url);
        return rs.data;
    } catch (error) {
        return [];
    }
}
export const login = async (data)=>{
    const url = `/api/auth/login`;
    try {
        const rs = await axios_instance.post(url,data);
        const jwt =  rs.data.jwt;
        axios_instance.defaults.headers.common["Authorization"] = 
            `Bearer ${jwt}`;
        return jwt;
    } catch (error) {
        return null;
    }
}
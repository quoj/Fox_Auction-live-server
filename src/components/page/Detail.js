import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Detail(){
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const _getDetail = async ()=> {
        const url = `https://dummyjson.com/products/${id}`;
        try {
            const rs = await axios.get(url); // auto chuyển thành json
            setProduct(rs.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        _getDetail();
    },[])
    return (
        <div className="container">
            <h1>{product.title}</h1>
            <img src={product.thumbnail}/>
            <p>{product.price}$</p>
            <p>{product.description}</p>
        </div>
    )
}
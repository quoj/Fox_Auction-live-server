// src/context/ImageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState({
        mainImage: null,
        image1: null,
        image2: null
    });

    // Fetch dữ liệu từ API khi component được mount
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5196/api/Products');
                const productData = response.data;

                // Giả sử response.data trả về mảng các sản phẩm, lấy sản phẩm đầu tiên
                const firstProduct = productData[0]; 

                // Cập nhật selectedImage với image1 và image2 từ API
                setSelectedImage({
                    mainImage: firstProduct.thumbnail, // Hoặc firstProduct.image chính
                    image1: firstProduct.image1,
                    image2: firstProduct.image2
                });
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu hình ảnh:', error);
            }
        };

        fetchImages();
    }, []); // Chạy chỉ một lần khi component được mount

    return (
        <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImageContext = () => useContext(ImageContext);

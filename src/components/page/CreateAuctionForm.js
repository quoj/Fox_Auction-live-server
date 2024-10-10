import React, { useState, useEffect } from 'react';
import './CreateAuction.css';
import axios from 'axios';

function CreateProductForm() {
    const [images, setImages] = useState([null, null]);
    const [formData, setFormData] = useState({
        name: '',
        categoryId: '',
        description: '',
        price: '',
        startTime: '',
        endTime: '',
        condition_id: '',
        item_id: ''
    });
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5196/api/Products/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
            }
        };

        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5196/api/Products/items');
                setItems(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy mặt hàng:', error);
            }
        };

        fetchCategories();
        fetchItems();
    }, []);

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);
        }
    };

    const triggerFileInput = (index) => {
        document.getElementById(`fileInput${index}`).click();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tạo FormData để gửi lên server
        const productData = new FormData();
        productData.append('name', formData.name);
        productData.append('price', formData.price);
        productData.append('description', formData.description);
        productData.append('categoryId', formData.categoryId);
        productData.append('startTime', formData.startTime);
        productData.append('endTime', formData.endTime);
        productData.append('condition_id', formData.condition_id);
        productData.append('item_id', formData.item_id);

        // Tách riêng image1, image2 thay vì gộp chung vào "images"
        if (images[0]) productData.append('Image1', images[0]);
        if (images[1]) productData.append('Image2', images[1]);

        try {
            const response = await axios.post('http://localhost:5196/api/Products', productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponseData(response.data); // Lưu dữ liệu phản hồi
            console.log('Sản phẩm đã được tạo:', response.data);
        } catch (error) {
            console.error('Lỗi khi tạo sản phẩm:', error.response?.data || error.message);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Tạo Sản Phẩm Mới</h2>
            <form className="auction-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Tên sản phẩm" 
                    className="input-field title" 
                    value={formData.name}
                    onChange={handleChange}
                />
                <select 
                    name="categoryId" 
                    className="input-field category" 
                    value={formData.categoryId}
                    onChange={handleChange}
                >
                    <option value="">Chọn danh mục</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>

                <select 
                    name="condition_id" 
                    className="input-field condition" 
                    value={formData.condition_id}
                    onChange={handleChange}
                >
                    <option value="">Chọn tình trạng</option>
                    <option value="1">Mới</option>
                    <option value="2">Đã sử dụng</option>
                </select>

                <select 
                    name="item_id" 
                    className="input-field item" 
                    value={formData.item_id}
                    onChange={handleChange}
                >
                    <option value="">Chọn mặt hàng</option>
                    {items.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
                
                <textarea 
                    name="description" 
                    placeholder="Mô tả sản phẩm" 
                    className="input-field description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>

                <input 
                    type="datetime-local" 
                    name="startTime" 
                    className="input-field start-time" 
                    value={formData.startTime}
                    onChange={handleChange}
                />

                <input 
                    type="datetime-local" 
                    name="endTime" 
                    className="input-field end-time" 
                    value={formData.endTime}
                    onChange={handleChange}
                />
                
                <div className="image-upload">
                    {images.map((image, index) => (
                        <div key={index} className="image-placeholder" onClick={() => triggerFileInput(index)}>
                            {image ? <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} /> : (
                                <div className="add-image">
                                    <span>+</span>
                                </div>
                            )}
                            <input
                                type="file"
                                id={`fileInput${index}`}
                                style={{ display: 'none' }}
                                onChange={(event) => handleImageChange(index, event)}
                            />
                        </div>
                    ))}
                </div>

                <input 
                    type="number" 
                    name="price" 
                    placeholder="Giá khởi điểm" 
                    className="input-field starting-price" 
                    value={formData.price}
                    onChange={handleChange}
                />
                
                <button type="submit" className="submit-button">Tạo Sản Phẩm</button>
            </form>

            {/* Hiển thị dữ liệu phản hồi ở đây */}
            {responseData && (
                <div className="response-data">
                    <h3>Kết quả:</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default CreateProductForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useImageContext } from '../../context/ImageContext';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { setSelectedImage } = useImageContext();

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12; // 12 products per page

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5196/api/Products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5196/api/Products/categories');
                const categoryData = response.data.reduce((acc, category) => {
                    acc[category.id] = category.name;
                    return acc;
                }, {});
                setCategories(categoryData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleFieldChange = (event) => {
        setSelectedField(event.target.value);
    };

    // Filter products based on search term and selected category
    const filteredProducts = products
        .filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(product => 
            selectedCategory ? product.category_id === Number(selectedCategory) : true
        )
        .sort((a, b) => {
            if (selectedField === 'price') {
                return a.price - b.price;
            } else if (selectedField === 'name') {
                return a.name.localeCompare(b.name);
            } else if (selectedField === 'startTime') {
                return new Date(a.startTime) - new Date(b.startTime);
            } else if (selectedField === 'endTime') {
                return new Date(a.endTime) - new Date(b.endTime);
            }
            return 0;
        });

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const styles = {
        productList: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '30px',
            backgroundColor: '#f4f1ea',
        },
        productGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
        },
        productCard: {
            backgroundColor: '#fefaf4',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            textAlign: 'center',
            fontFamily: "'Georgia', serif",
        },
        productCardHover: {
            transform: 'scale(1.05)',
        },
        productTitle: {
            fontSize: '1.3em',
            marginBottom: '10px',
            color: '#3d3d3d',
            fontFamily: "'Roboto', sans-serif",  
        },        
        productPrice: {
            fontWeight: 'bold',
            color: '#8B4513',
            fontSize: '1.2em',
        },
        thumbnail: {
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '15px',
            border: '3px solid #b08968',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        },
        imagesGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '10px',
        },
        smallImage: {
            width: '80px',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '4px',
            border: '2px solid #ddd',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        categorySelect: {
            marginBottom: '20px',
            padding: '12px',
            fontSize: '18px',
            width: '300px',
            borderRadius: '6px',
            border: '1px solid #ccc',
        },
        searchInput: {
            padding: '12px',
            marginBottom: '20px',
            width: '100%',
            fontSize: '18px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#f8f4e8',
        },
        fieldSelect: {
            marginBottom: '20px',
            padding: '12px',
            fontSize: '18px',
            width: '300px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#f8f4e8',
        },
        pagination: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
        },
        paginationButton: {
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#3d3d3d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        disabledButton: {
            backgroundColor: '#ddd',
            cursor: 'not-allowed',
        },
    };

    return (
        <div style={styles.productList}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Danh Sách Sản Phẩm</h2>

            <input
                type="text"
                style={styles.searchInput}
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select style={styles.fieldSelect} value={selectedField} onChange={handleFieldChange}>
                <option value="">Chọn trường phân loại</option>
                <option value="name">Tên</option>
                <option value="price">Giá</option>
                <option value="startTime">Thời gian bắt đầu</option>
                <option value="endTime">Thời gian kết thúc</option>
            </select>

            <div style={styles.productGrid}>
                {currentProducts.length === 0 ? (
                    <p>Không có sản phẩm nào để hiển thị.</p>
                ) : (
                    currentProducts.map(product => (
                        <div
                            key={product.id}
                            style={styles.productCard}
                            onMouseEnter={e => (e.currentTarget.style.transform = styles.productCardHover.transform)}
                            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <h3 style={styles.productTitle}>{product.name}</h3>
                            <p style={styles.productPrice}>Giá: ${product.price}</p>
                            {product.thumbnail && (
                             <Link
                             to="/"
                             onClick={() => {
                                 const selected = {
                                     image: product.thumbnail,
                                     thumbnailImages: product.thumbnailImages,
                                     description: product.description,
                                     name: product.name,
                                     price: product.price,
                                     startTime: product.startTime,
                                     endTime: product.endTime,
                                 };
                                 setSelectedImage(selected);
                                 localStorage.setItem('selectedImage', JSON.stringify(selected)); // Lưu vào localStorage
                             }}
                         >
                             <img style={styles.thumbnail} src={product.thumbnail} alt={product.name} />
                         </Link>
                         
                            )}
                            {product.images && product.images.length > 0 && (
                                <div style={styles.imagesGrid}>
                                    {product.images.map((image, index) => (
                                        <img key={index} style={styles.smallImage} src={image} alt={`Product ${index + 1}`} />
                                    ))}
                                </div>
                            )}
                            {product.category_id && (
                                <p>Danh mục: {categories[product.category_id] || 'Không xác định'}</p>
                            )}
                            {product.startTime && <p>Thời gian bắt đầu: {new Date(product.startTime).toLocaleString()}</p>}
                            {product.endTime && <p>Thời gian kết thúc: {new Date(product.endTime).toLocaleString()}</p>}
                        </div>
                    ))
                )}
            </div>

            <div style={styles.pagination}>
                <button style={styles.paginationButton} onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        style={{
                            ...styles.pageButton,
                            ...(currentPage === index + 1 ? { backgroundColor: '#3d3d3d', color: '#fff' } : {}),
                            padding: '10px 20px', // Increased padding
                            fontSize: '12spx',      // Increased font size
                            margin: '0 10px',      // Added margin for spacing between buttons
                        }}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button style={styles.paginationButton} onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductList;

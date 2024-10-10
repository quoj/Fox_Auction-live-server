import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useImageContext } from '../../context/ImageContext'; // Import useImageContext
import axios from 'axios'; // Import axios để gửi yêu cầu HTTP
import BidderList from './BidderList'; // Import BidderList
import BidderList1 from './BidderList1'; // Import BidderList1 để hiển thị giá cao nhất


const Home = () => {
  const { selectedImage } = useImageContext(); // Lấy thông tin sản phẩm được chọn từ context
  const [mainImage, setMainImage] = useState(selectedImage.image);
  const [image1, setImage1] = useState(selectedImage.image1);
  const [image2, setImage2] = useState(selectedImage.image2);
  const [thumbnailImages, setThumbnailImages] = useState(selectedImage.thumbnailImages || []);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);
  const [bidAmount, setBidAmount] = useState(''); // Trạng thái để lưu trữ số tiền đấu thầu
  const [highestBid, setHighestBid] = useState(null);
  const [highestBidder, setHighestBidder] = useState(null); // Thêm biến trạng thái cho người đấu giá cao nhất
  const [bidList, setBidList] = useState([]);
  

  const getHighestBidder = () => {
    if (bidList.length === 0) return null;

    return bidList.reduce((highest, bid) => {
      return (highest.amount || 0) < bid.amount ? { ...bid } : highest;
    }, {});
  };
  

  useEffect(() => {
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
        const parsedImage = JSON.parse(storedImage);
        setMainImage(parsedImage.image);
        setImage1(parsedImage.image1);
        setImage2(parsedImage.image2);
        fetchBidInfo(parsedImage.id); // Cập nhật thông tin đấu giá nếu có
        
    }

    
    fetch('http://localhost:5196/api/Products/126') // Thay đổi ID sản phẩm nếu cần
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Đặt dữ liệu sản phẩm vào state
        console.log(data  )
        setProduct(data);
      })
      .catch((error) => {
        // Xử lý lỗi khi gọi API
        console.error('Error fetching product data:', error);
        setError('Could not fetch product data. Please try again later.');
      });
    const fetchProducts = async () => {
      try {
          const response = await axios.get('http://localhost:5196/api/Products');
          setProduct(response.data);
          console.log("Product:",response.data)
      } catch (error) {
          console.error('Error fetching products:', error);
      }
  };
    if (selectedImage && selectedImage.id) {
        // Kiểm tra xem hình ảnh đã có sẵn chưa
        if (selectedImage.image, selectedImage.image1,selectedImage.image2) {
            setMainImage(selectedImage.image);
            setImage1(selectedImage.image1);
            setImage2(selectedImage.image2);
            fetchBidInfo(selectedImage.id);
        } else {
            console.error('Dữ liệu hình ảnh chưa sẵn sàng.');
        }
    } else {
        console.error('Chưa có sản phẩm được chọn.');
    }
    fetchProducts();
}, [selectedImage]);


  
  
 const fetchBidInfo = async (productId) => {
  try {
    const response = await axios.get(`http://localhost:5196/api/Products/${productId}`);
    console.log(response.data);
    
    // Giả sử response.data trả về đối tượng của sản phẩm đã chọn
    setBidList(response.data.Bids);
    
    // Gán giá trị cho image1 và image2 từ mảng 'images' trong API
    setImage1(response.data.image1); // Correctly set image1
    setImage2(response.data.image2); // Nếu không có ảnh thì gán chuỗi rỗng

    // Cập nhật giá thầu cao nhất và người đấu giá cao nhất
    const highest = response.data.highestBid;
    setHighestBid(highest);

    const highestBidderInfo = getHighestBidder();
    setHighestBidder(highestBidderInfo?.bidderName || 'Chưa có người đấu giá');
  } catch (error) {
    console.error('Lỗi khi lấy thông tin đấu thầu:', error);
  }
};



  const isBidAllowed = () => {
    const currentTime = new Date();
    const endTime = new Date(selectedImage.endTime);
    return currentTime < endTime;
  };

  const handlePlaceBid = async () => {
    if (!bidAmount || isNaN(bidAmount) || Number(bidAmount) <= 0) {
      alert('Vui lòng nhập số tiền đấu thầu hợp lệ.');
      return;
    }

    try {
      await axios.post('http://localhost:5196/api/Bids', {
        productId: selectedImage?.id,
        amount: Number(bidAmount),
        bidderName: 'Anonymous' // Thay thế với tên người đấu thầu thực tế nếu có
      });
      alert('Đặt giá thầu thành công!');
      setBidAmount(''); // Xóa trường nhập sau khi đặt giá thầu thành công
      fetchBidInfo(selectedImage.id); // Cập nhật thông tin sau khi đặt giá thầu
    } catch (error) {
      console.error('Lỗi khi đặt giá thầu:', error);
      alert('Đã xảy ra lỗi khi đặt giá thầu. Vui lòng thử lại.');
    }
  };

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleMoreInfo = () => {
    setIsMoreInfoVisible(!isMoreInfoVisible);
  };

  
  console.log(image1, image2);
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-1">
          <div className="d-flex flex-column">
            {/* Hiển thị ảnh chính */}
            <img src={mainImage} alt="Main Product" className="img-fluid main-image" />
            {/* Hiển thị ảnh phụ 1 nếu tồn tại */}
            {image1 ? (
              <img src={image1} alt="Image 1" className="img-fluid main-image" />
            ) : (
            <p>Không có ảnh phụ 1</p>
            )}
            {/* Hiển thị ảnh phụ 2 nếu tồn tại */}
            {image2 ? (
              <img src={image2} alt="Image 2" className="img-fluid main-image" />
            ) : (
            <p>Không có ảnh phụ 2</p>
            )}
          </div>
        </div>


        <div className="col-md-7">
          <img src={mainImage} alt="Main Product" className="img-fluid main-image" />
          <div className="product-description mb-3">
            <p><strong>Antique Item Description</strong></p>
            <p>{selectedImage?.description || 'Không có mô tả sản phẩm.'}</p>
            {isMoreInfoVisible && (
              <div>
                <p><strong>General Introduction:</strong> {selectedImage?.description}</p>
                <p><strong>Condition:</strong> {selectedImage?.description}</p>
                <p><strong>Provenance:</strong> {selectedImage?.description}</p>
                <p><strong>Author Bio:</strong> {selectedImage?.description}</p>
              </div>
            )}
            <p>
              <button
                style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', background: 'none', border: 'none' }}
                onClick={toggleMoreInfo}
              >
                {isMoreInfoVisible ? '...Thu gọn' : '...Xem thêm'}
              </button>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="product-info">
            <div className="product-title mb-3">
              <p className="text-muted" style={{ fontWeight: '500' }}>
                {selectedImage?.startTime ? new Date(selectedImage.startTime).toLocaleString() : 'Chưa xác định'}
              </p>
              <h2>{selectedImage?.name || 'Sản phẩm không xác định'}</h2>
            </div>
            <div className="product-bid mb-3 d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-0">
                  Giá thầu hiện tại | <span className="bidder-count" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                    {bidList.length} Người đấu giá
                  </span>
                </p>
              </div>
              <div>
                <p className="mb-0">
                  Kết thúc vào {selectedImage?.endTime ? new Date(selectedImage.endTime).toLocaleString() : 'N/A'}
                </p>
              </div>
            </div>
            <BidderList1 highestBid={highestBid} /> 

            <div className="mb-1">
              <p className="mb-0" style={{ fontWeight: '500' }}>Giá thầu tối đa của bạn</p>
            </div>

            
            <div className="bid-input mb-3 d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập giá thầu tối đa của bạn $"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                style={{ borderRadius: '0', padding: '10px', backgroundColor: '#f8f9fa', flex: '1' }}
              />
              <button
                className="btn btn-dark"
                style={{ height: '45px', flexShrink: '0', borderRadius: '0' }}
                onClick={handlePlaceBid}
                disabled={!isBidAllowed()} // Vô hiệu hóa nút khi thời gian đã hết
              >
                Đặt giá thầu
              </button>
            </div>

            {/* Danh sách người đấu giá */}
            <BidderList bidList={bidList} />
            
            {/* Thông tin thanh toán */}
            <div className="payment-info mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Thanh toán</h4>
                <button onClick={toggleDescription} className="btn btn-link" style={{ color: 'black', fontWeight: 'bold' }}>
                  {isDescriptionVisible ? '∧' : '∨'}
                </button>
              </div>
              {isDescriptionVisible && (
                <p>Tất cả các khoản thanh toán đều được Fox Auction xem xét để đảm bảo an toàn cho bạn.</p>
              )}
            </div>
            <p>Thanh toán trực tiếp | Thanh toán một phần | Hóa đơn
              Các tùy chọn với bảo vệ người mua có sẵn.
              <button
                style={{ fontWeight: 'bold', textDecoration: 'underline', marginTop: '20px', display: 'inline-block', background: 'none', border: 'none', color: 'black' }}
                onClick={() => {/* hàm để hiển thị thêm thương hiệu */}}
              >
                Thương hiệu nhiều hơn
              </button>
            </p>
            <div className="seller-info">
              <hr className="custom-line" style={{ backgroundColor: 'black' }} />
              <div className="product-bid mb-3 d-flex justify-content-between align-items-center">
                <div>
                  <p><strong>Markus</strong></p>
                </div>
                <div>
                  <p>
                    <span className="text-black" style={{ marginRight: '10px' }}>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-black">4/5</span>
                  </p>
                </div>
              </div>
              <hr className="custom-line" style={{ backgroundColor: 'black' }} />
              <p className="mb-0">Hỗ trợ 24/7 | Gọi: 1-800-555-0199</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        messageError: '',
        generalError: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { nameError: '', emailError: '', messageError: '', generalError: '' };

        if (!formData.name) {
            newErrors.nameError = 'Tên là bắt buộc';
            valid = false;
        }

        if (!formData.email) {
            newErrors.emailError = 'Email là bắt buộc';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.emailError = 'Email không hợp lệ';
            valid = false;
        }

        if (!formData.message) {
            newErrors.messageError = 'Nội dung là bắt buộc';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Logic gửi form ở đây (ví dụ: gửi dữ liệu tới API)
            alert('Gửi form thành công!');
            // Reset form sau khi gửi
            setFormData({ name: '', email: '', message: '' });
            setErrors({ nameError: '', emailError: '', messageError: '', generalError: '' });
        }
    };

    return (
        <div>
            <style>
                {`
                    .contact-us-header h2 {
                        font-family: "Barlow", sans-serif;
                        font-size: 30px;
                        font-weight: 800;
                        line-height: 35px;
                        margin-bottom: 20px;
                    }
                    .error-message {
                        color: red;
                        font-size: 12px;
                    }
                    .submit-btn {
                        background-color: #007bff; /* Màu nền nút */
                        color: white; /* Màu chữ */
                    }
                    .contact-info a {
                        color: black; /* Đổi màu liên kết thành màu đen */
                        text-decoration: none; /* Bỏ gạch chân */
                    }
                    .contact-info a:hover {
                        text-decoration: underline; /* Gạch chân khi hover */
                    }
                    .contact-info p {
                        color: black; /* Đổi màu văn bản thành màu đen */
                    }
                `}
            </style>
            {/* Phần Header */}
            <section className="about-header" style={{ backgroundImage: `url('./img/IMG_1554-03.jpg')`, backgroundColor: '#f8f8f8', padding: '100px 0' }}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2 style={{ fontSize: '48px', color: '#fff', fontWeight: 'bold' }}>Contact Me</h2>
                            <div className="bread-crumb" style={{ margin: '10px 0' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>Home</a>
                                <span style={{ color: '#fff' }}> &gt; </span>
                                <strong style={{ color: '#fff' }}> Contact</strong>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Phần Form Liên Hệ */}
            <div className="contact-page">
                <Container className="contact-container" style={{ marginBottom: '100px' }}>
                    <Row>
                        <Col md={6}>
                            <div className="contact-us-header">
                                <h2>LIÊN HỆ VÀ TÌM ĐỒ CỔ TỐT NHẤT CHO BẠN</h2>
                            </div>
                            <div className="contact-detail">
                                <p>Có câu hỏi hoặc cần hỗ trợ? Chúng tôi ở đây để giúp bạn! Liên hệ với chúng tôi qua thông tin bên dưới, và đội ngũ của chúng tôi sẽ trả lời bạn sớm nhất có thể.</p>
                            </div>
                            <div className="contact-info" style={{ display: 'flex' }}>
                                <div className="col-md-6">
                                    <div className="customer-support">
                                        <i className="fa-solid fa-user"></i>
                                        <p>Hỗ Trợ Khách Hàng</p>
                                        <div className="contact-list">
                                            <a href="mailto:support@gmail.com">support@gmail.com</a>
                                            <p></p>
                                            <a href="tel:+84123456789">+84 123 456 789</a>
                                            <p></p>
                                            <p id="openLiveChatBtn">Live Chat</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="store-location">
                                        <div className="store-header">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p>Cửa Hàng</p>
                                        </div>
                                        <div className="store-list">
                                            <a href="https://www.google.com/maps?q=21.028722,105.783361">Số 8 Tôn Thất Thuyết, Hà Nội</a>
                                            <p></p>
                                            <a href="https://www.google.com/maps?q=10.786407244885046,106.66628462699894">590 Cách Mạng Tháng Tám, TP. HCM</a>
                                            <p></p>
                                            <a href="https://www.google.com/maps?q=10.790970924064588,106.68241486748099">391A, Nam Kỳ Khởi Nghĩa, TP. HCM</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="contact-email">
                                <Form id="myForm" method="post" onSubmit={handleSubmit}>
                                    <div className="form-row" style={{ marginBottom: '20px' }}>
                                        <div className="col-md-6">
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text" 
                                                    id="name" 
                                                    placeholder="Tên*" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    aria-describedby="nameError"
                                                />
                                                {errors.nameError && <div className="error-message" id="nameError">{errors.nameError}</div>}
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group>
                                                <Form.Control 
                                                    type="email" 
                                                    id="email" 
                                                    placeholder="Email*" 
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    aria-describedby="emailError"
                                                />
                                                {errors.emailError && <div className="error-message" id="emailError">{errors.emailError}</div>}
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <Form.Group>
                                                <Form.Control 
                                                    as="textarea" 
                                                    id="message" 
                                                    rows={10} 
                                                    placeholder="Nhập tin nhắn của bạn" 
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    style={{ maxHeight: '148px', height: '148px' }} 
                                                    aria-describedby="messageError"
                                                />
                                                {errors.messageError && <div className="error-message" id="messageError">{errors.messageError}</div>}
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button type="submit" className="submit-btn">Gửi Ngay</Button>
                                    {errors.generalError && <div className="error-messages">{errors.generalError}</div>}
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Phần Bản Đồ Google */}
            <div className="google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.102886142648!2d105.78075357603396!3d21.028568887783628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cdef48301%3A0x9e3f57b9adf0d78!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1svi!2s!4v1631839213308!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;

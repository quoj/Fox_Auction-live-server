import React from 'react';
import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            {/* Header Section */}
            <section className="about-header" style={{ backgroundImage: `url('./img/IMG_1554-03.jpg')`, backgroundColor: '#f8f8f8', padding: '50px 0' }}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2 style={{ fontSize: '48px', color: '#fff', fontWeight: 'bold' }}>About Us</h2>
                            {/* Breadcrumb */}
                            <div className="bread-crumb" style={{ margin: '10px 0' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>Home</a>
                                <span style={{ color: '#fff' }}> &gt; </span> {/* Custom color for '>' */}
                                <strong style={{ color: '#fff' }}> About Us</strong>
                            </div>
                            <p style={{ fontSize: '18px', color: '#fff', maxWidth: '800px', margin: '20px auto' }}>
                                We're on a mission to create a global marketplace that brings people together through the joy of secondhand shopping.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Video Section */}
            <section className="about-video" style={{ padding: '50px 0' }}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            {/* Hidden about-us top section */}
                            <div className="aboutus-top hidden">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>
                                                Antiques & <br />
                                                We Are An Awesome Agency.
                                            </h1>
                                            <p>
                                                At our store, we believe that antiques are not just objects but vessels of history that connect us to the past. Each piece tells a unique story, reflecting the craftsmanship and artistry of its time. Our curated selection features a variety of antiques, from vintage furniture to intricate collectibles, all meticulously sourced and restored to preserve their original charm. We strive to educate our customers about the significance of each item, helping them appreciate the rich heritage and culture behind every antique. Embrace the timeless beauty of antiques with us and add a touch of history to your home.
                                            </p>
                                            <a href="">EXPLORE MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Video display */}
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <Image src="/img/images3195417_co_vat1_1247.jpg" fluid alt="About Us Video" />
                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '50%'
                                }}>
                                    <i className="fa fa-play" style={{ fontSize: '30px', color: '#fff' }}></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="about-stats" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
                <Container>
                    <Row className="text-center">
                        <Col md={4}>
                            <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>50M+</h2>
                            <p>Downloads</p>
                        </Col>
                        <Col md={4}>
                            <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>350K+</h2>
                            <p>Active Users</p>
                        </Col>
                        <Col md={4}>
                            <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>10M+</h2>
                            <p>Transactions</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission Section */}
            <section className="about-mission" style={{ padding: '50px 0' }}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Image src="./img/DALL·E 2024-10-04 16.27.27.jpg" fluid alt="Our Mission" />
                        </Col>
                        <Col md={6}>
                            <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Our Mission</h2>
                            <p style={{ fontSize: '18px', color: '#555' }}>
                            We believe in the timeless value of antiques, not just as a way to appreciate history, but as a more sustainable and thoughtful way of living. By collecting and preserving antiques, we help to safeguard cultural heritage and reduce waste, creating a more meaningful world for future generations.
                            </p>
                            <Button variant="primary" href="#" style={{ marginTop: '20px' }}>Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Section with Carousel */}
            <section className="about-team" style={{ backgroundColor: '#f8f8f8', padding: '50px 0' }}>
                <Container>
                    <Row className="text-center">
                        <Col md={12}>
                            <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Meet Our Team</h2>
                            <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '20px auto' }}>
                            Our team is composed of talented individuals from diverse backgrounds who are all passionate about preserving and sharing the beauty of antiques.
                            </p>
                        </Col>
                    </Row>

                    {/* Team Carousel */}
                    <Carousel indicators={false} interval={null}>
                        <Carousel.Item>
                            <Row className="text-center">
                                <Col md={4}>
                                    <Image src="./img/oprah-winfrey-1-e1622705614774.jpg" roundedCircle fluid alt="Team Member" />
                                    <h4 style={{ marginTop: '15px' }}>John Doe</h4>
                                    <p>CEO</p>
                                </Col>
                                <Col md={4}>
                                    <Image src="./img/oprah-winfrey-1-e1622705614774.jpg" roundedCircle fluid alt="Team Member" />
                                    <h4 style={{ marginTop: '15px' }}>Jane Smith</h4>
                                    <p>COO</p>
                                </Col>
                                <Col md={4}>
                                    <Image src="./img/oprah-winfrey-1-e1622705614774.jpg" roundedCircle fluid alt="Team Member" />
                                    <h4 style={{ marginTop: '15px' }}>Alice Brown</h4>
                                    <p>CTO</p>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row className="text-center">
                                <Col md={4}>
                                    <Image src="./img/oprah-winfrey-1-e1622705614774.jpg" roundedCircle fluid alt="Team Member" />
                                    <h4 style={{ marginTop: '15px' }}>Mark Taylor</h4>
                                    <p>Marketing Manager</p>
                                </Col>
                                <Col md={4}>
                                    <Image src="./img/oprah-winfrey-1-e1622705614774.jpg" roundedCircle fluid alt="Team Member" />
                                    <h4 style={{ marginTop: '15px' }}>Sophia Green</h4>
                                    <p>Lead Designer</p>
                                </Col>
                                <Col md={4}>
                                    <Image src="./img/oprah-winfrey-1-e1622705614774.jpg" roundedCircle fluid alt="Team Member" />
                                    <h4 style={{ marginTop: '15px' }}>Liam White</h4>
                                    <p>Lead Developer</p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

                        {/* Store Story Section */}
                        <section id="aboutus-story" className="container hidden" style={{ padding: '50px 0' }}>
                <div className="text-center story-title">
                    <h1>Store In The World</h1>
                    <p>
                        It is different than anything you have experienced before! In the store we help you find the proper pair of shoes through our stride analysis, fitting you for your
                        biomechanics. We take care of every customer by analyzing their stride, measuring their feet, and providing recommendations. Contrary to popular belief, every shoe is
                        not the same.
                    </p>
                </div>
                <Row>
                    <Col md={6} className="banner-1 hidden">
                        <a href="">
                            <Image src="./img/DSC_8955.jpg" alt=""  fluid  style={{ height: '700px', objectFit: 'cover' }}/>
                        </a>
                    </Col>
                    <Col md={6} className="banner-2-3 hidden d-flex flex-column">
                    <a href="">
                        <Image id="banner-2" src="./img/IMG_1554-03.jpg" alt="" fluid />
                    </a>
                    <a href="">
                        <Image src="./img/top-dia-chi-mua-ban-do-co-suu-tam-co-vat-uy-tin-nhat-hcm-1.jpg" alt="" fluid style={{ marginTop: '10px' }} />
                    </a>
                    </Col>

                </Row>
            </section>

            {/* Store Information Section */}
            <section id="aboutus-info" className="container hidden" style={{ padding: '50px 0' }}>
                <Row>
                    <Col md={4}>
                        <div className="store-title hidden">
                            <h5>Hanoi STORE</h5>
                        </div>
                        <div className="store-detail hidden">
                            <p>Số 8 Tôn Thất Thuyết, Hà Nội</p>
                            <p>Monday to Friday : 9am to 8pm</p>
                            <p>creativewithjoy@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="store-title hidden">
                            <h5>TP. HCM STORE</h5>
                        </div>
                        <div className="store-detail hidden">
                            <p>590 Cách Mạng Tháng Tám, TP. HCM</p>
                            <p>Monday to Friday : 8am to 5pm</p>
                            <p>creativewithjoy@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="store-title hidden">
                            <h5>TP. HCM STORE</h5>
                        </div>
                        <div className="store-detail hidden">
                            <p>391A, Nam Kỳ Khởi Nghĩa, TP. HCM</p>
                            <p>Monday to Friday : 9am to 8pm</p>
                            <p>creativewithjoy@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </section>


            {/* Footer Section */}
            <section className="about-footer" style={{ padding: '50px 0', backgroundColor: '#f47900', color: '#fff' }}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Want to join us?</h2>
                            <Button href="#" style={{ color: 'white' }}>View Careers</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default AboutUs;

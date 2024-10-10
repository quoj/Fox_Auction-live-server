import React from 'react';
import { Container, Row, Col, Image, FormControl, InputGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="about-header" style={{ backgroundImage: `url('./img/maxresdefault.jpg')`, backgroundColor: '#f8f8f8', padding: '100px 0' }}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2 style={{ fontSize: '48px', color: '#fff', fontWeight: 'bold' }}>Blog</h2>
                            {/* Breadcrumb */}
                            <div className="bread-crumb" style={{ margin: '10px 0' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff' }}>Home</a>
                                <span style={{ color: '#fff' }}> &gt; </span> {/* Custom color for '>' */}
                                <strong style={{ color: '#fff' }}> Blog</strong>
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <div style={{ height: '60px' }} /> 

            {/* Blog Content Section */}
            <div className="container-fluid blog-wrap">
                <Row>
                    <Col lg={9}>
                        {/* Blog News 1 */}
                        <div className="blog-news" style={{ marginBottom: '40px' }}>
                            <a href="run">
                                <Image src="./img/IMG_1554-03.jpg" alt="" width="70%" style={{ borderRadius: '10px' }} />
                            </a>
                            <div className="blog-content" style={{ paddingTop: '20px' }}>
                                <h4 style={{ color: '#ff4081', fontWeight: 'bold' }}>NEWS</h4>
                                <a href="Running.html" style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>The Thrill of Antique Collecting</a>
                                <p style={{ color: '#555', marginTop: '10px' }}>Discover the excitement of hunting for rare antiques and the stories they tell...</p>
                                <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2023</span>
                                <div className="read-more" style={{ marginTop: '10px' }}>
                                    <a href="Running.html" style={{ textDecoration: 'none', color: '#ff4081', fontWeight: 'bold' }}>Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* Blog News 2 */}
                        <div className="blog-news" style={{ marginBottom: '40px' }}>
                            <a href="basketball.html">
                                <Image src="/img/images3195417_co_vat1_1247.jpg" alt="" width="70%" style={{ borderRadius: '10px' }} />
                            </a>
                            <div className="blog-content" style={{ paddingTop: '20px' }}>
                                <h4 style={{ color: '#ff4081', fontWeight: 'bold' }}>NEWS</h4>
                                <a href="basketball.html" style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>Restoring Antique Furniture: Tips and Techniques</a>
                                <p style={{ color: '#555', marginTop: '10px' }}>Learn how to breathe new life into your treasured antique pieces...</p>
                                <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2023</span>
                                <div className="read-more" style={{ marginTop: '10px' }}>
                                    <a href="basketball.html" style={{ textDecoration: 'none', color: '#ff4081', fontWeight: 'bold' }}>Read More</a>
                                </div>
                            </div>
                        </div>

                         {/* Antique News 3 */}
                         <div className="blog-news" style={{ marginBottom: '40px' }}>
                            <a href="antique-jewelry.html">
                                <Image src="./img/DALL·E 2024-10-04 16.27.27.jpg" alt="" width="70%" style={{ borderRadius: '10px' }} />
                            </a>
                            <div className="blog-content" style={{ paddingTop: '20px' }}>
                                <h4 style={{ color: '#ff4081', fontWeight: 'bold' }}>NEWS</h4>
                                <a href="antique-jewelry.html" style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>The Allure of Antique Jewelry</a>
                                <p style={{ color: '#555', marginTop: '10px' }}>Explore the history and craftsmanship behind stunning antique jewelry pieces...</p>
                                <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2024</span>
                                <div className="read-more" style={{ marginTop: '10px' }}>
                                    <a href="antique-jewelry.html" style={{ textDecoration: 'none', color: '#ff4081', fontWeight: 'bold' }}>Read More</a>
                                </div>
                            </div>
                        </div>

                         {/* Antique News 4 */}
                         <div className="blog-news" style={{ marginBottom: '40px' }}>
                            <a href="antique-glass.html">
                                <Image src="./img/DALL·E 2024-10-04 16.27.27.jpg" alt="" width="70%" style={{ borderRadius: '10px' }} />
                            </a>
                            <div className="blog-content" style={{ paddingTop: '20px' }}>
                                <h4 style={{ color: '#ff4081', fontWeight: 'bold' }}>NEWS</h4>
                                <a href="antique-glass.html" style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>Understanding Antique Glassware</a>
                                <p style={{ color: '#555', marginTop: '10px' }}>Get to know the different types of antique glass and their value...</p>
                                <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2024</span>
                                <div className="read-more" style={{ marginTop: '10px' }}>
                                    <a href="antique-glass.html" style={{ textDecoration: 'none', color: '#ff4081', fontWeight: 'bold' }}>Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* Antique News 5 */}
                        <div className="blog-news" style={{ marginBottom: '40px' }}>
                            <a href="antique-collectibles.html">
                                <Image src="./img/DALL·E 2024-10-04 16.27.27.jpg" alt="" width="70%" style={{ borderRadius: '10px' }} />
                            </a>
                            <div className="blog-content" style={{ paddingTop: '20px' }}>
                                <h4 style={{ color: '#ff4081', fontWeight: 'bold' }}>NEWS</h4>
                                <a href="antique-collectibles.html" style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>The World of Antique Collectibles</a>
                                <p style={{ color: '#555', marginTop: '10px' }}>Find out what makes collectibles valuable and how to start your own collection...</p>
                                <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2024</span>
                                <div className="read-more" style={{ marginTop: '10px' }}>
                                    <a href="antique-collectibles.html" style={{ textDecoration: 'none', color: '#ff4081', fontWeight: 'bold' }}>Read More</a>
                                </div>
                            </div>
                        </div>
                    </Col>


                    {/* Blog Sidebar */}
                    <Col lg={3}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                style={{ borderRadius: '20px' }}
                            />
                        </InputGroup>
                        <h2 className="title-aside" style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '20px' }}>Categories</h2>
                        <h2 className="title-aside" style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Recent posts</h2>

                        {/* Blog Sidebar Items */}
                        <div className="recent-post" style={{ marginBottom: '20px' }}>
                            <a href="antique-collecting.html" style={{ textDecoration: 'none', color: '#333' }}>
                            <img src="./img/DALL·E 2024-10-04 16.27.27.jpg" alt="Antique Collecting" style={{ width: '100px', height: '100px', borderRadius: '5px', marginRight: '10px' }} />
                                <h4 style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>The Thrill of Antique Collecting</h4>
                            </a>
                            <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2024</span>
                        </div>
                        <div className="recent-post" style={{ marginBottom: '20px' }}>
                            <a href="antique-restoration.html" style={{ textDecoration: 'none', color: '#333' }}>
                            <img src="/img/images3195417_co_vat1_1247.jpg" alt="Antique Collecting" style={{ width: '150px', height: '100px', borderRadius: '5px', marginRight: '10px' }} />
                                <h4 style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>Restoring Antique Furniture</h4>
                            </a>
                            <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2024</span>
                        </div>
                        <div className="recent-post" style={{ marginBottom: '20px' }}>
                            <a href="antique-jewelry.html" style={{ textDecoration: 'none', color: '#333' }}>
                            <img src="./img/IMG_1554-03.jpg" alt="Antique Collecting" style={{ width: '150px', height: '100px', borderRadius: '5px', marginRight: '10px' }} />
                                <h4 style={{ margin: '0', fontSize: '1em', fontWeight: 'bold' }}>The Allure of Antique Jewelry</h4>
                            </a>
                            <span className="date-post1" style={{ color: '#999', fontSize: '0.9em' }}>10. August. 2024</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;

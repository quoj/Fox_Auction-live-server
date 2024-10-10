import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { login } from "../../services/apiService";
import axios_instance from "../../services/axios_instance";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" }); // Initialize user with default values
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const data = await login(user);
            console.log(data);

            // After logging in successfully, you might want to fetch products
            const products = await axios_instance.get("/api/Products");
            console.log(products.data); // Do something with the products data

            // Handle JWT or other post-login actions here
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage("Login failed. Please check your credentials."); // Set error message for user
        }
    };

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1>Login</h1>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Show error message if exists */}
                    <Form onSubmit={submitForm} method="post">
                        <InputGroup className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={user.email}
                                onChange={handleInput}
                                name="email"
                                type="email"
                                required // Mark the field as required
                            />
                        </InputGroup>
                        <InputGroup>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={user.password}
                                onChange={handleInput}
                                name="password"
                                type="password"
                                required // Mark the field as required
                            />
                        </InputGroup>
                        <Button type="submit" variant="primary">Login</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Login;

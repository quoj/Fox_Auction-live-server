import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import React from 'react';


export default function MyAccount(){
    const [account,setAccount] = useState({});
    const handleInput = (e)=>{
        const value = e.target.value;
        const key = e.target.name;
        // let acc = account;
        // acc[key] = value; 
        // setAccount(acc);
        setAccount({...account,[key]:value});
    }
    const handleSubmit = ()=>{

    }
    return (
        <div className="container">
            <h1>Register</h1>
            <Row>
                <Col xs={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full name: {account.fullname}</Form.Label>
                            <Form.Control onChange={handleInput} value={account.fullname} name="fullname" type="text" placeholder="Full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address: {account.email}</Form.Label>
                            <Form.Control onChange={handleInput} value={account.email} name="email" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleInput} value={account.password} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control onChange={handleInput} value={account.telephone} type="text" name="telephone" placeholder="Telephone"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleInput} value={account.address} as="textarea" name="address" placeholder="Address"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
import './style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Button } from 'reactstrap';


const SignUp = () => {
    const [level, setLevel] = useState(1);
    const textStyle = " fw-bold fs-5 ";
    return (
        <React.Fragment>
            <Container className="mt-5">
                <Row className="auth-main-container" style={{ backgroundColor: "white" }}>
                    <Col md="6" className="signup-login-side text-center" style={{ backgroundColor: "#FF3333", borderTopLeftRadius: "20px" }}>
                        <Row className={"signup-login-head-secondary mb-5 mt-5 " + (level === 1 ? textStyle : "")}>
                            <Col md="5" className="text-end">
                                <i className="fas fa-dice-one"></i>
                            </Col>
                            <Col className="text-start">Enter your Mobile number</Col>
                        </Row>
                        <Row className={"signup-login-head-secondary mb-5 mt-5" + (level === 2 ? textStyle : "")}>
                            <Col md="5" className="text-end">
                                <i className="fas fa-dice-two"></i>
                            </Col>
                            <Col className="text-start">Enter OTP in your Mobile number</Col>
                        </Row>
                        <Row className={"signup-login-head-secondary mb-5 mt-5" + (level === 3 ? textStyle : "")}>
                            <Col md="5" className="text-end">
                                <i className="fas fa-dice-three"></i>
                            </Col>
                            <Col className="text-start">Fill basic Details</Col>
                        </Row>
                        <hr />
                        <Col className="signup-login-head-primary mb-4">
                            Already an user
                        </Col>
                        <Col className="signup-login-head-secondary mb-4">
                            To keep connected with us please login with your personal info
                        </Col>
                        <Link to='/login'>
                            <Button className="invert-btn mb-5">
                                Log In
                            </Button>
                        </Link>
                    </Col>
                    <Col className="bg-bg-success auth-current-side text-center p-md-5 m-auto">
                        {
                            level === 1 ?
                                <React.Fragment>
                                    <Col md="" className="Signup-Header-Text mb-5">
                                        Create Account
                                    </Col>
                                    <Col>
                                        <Input
                                            className="p-3 mb-5"
                                            name="mobile"
                                            type="text"
                                            placeholder="Enter mobile number" />
                                        <Button className="btn" onClick={() => setLevel(level + 1)}>Enter</Button>
                                        <div className="signup-login-mobile mt-4">
                                            Already an user <a href="/login"><u>login</u></a> here
                                        </div>
                                    </Col>
                                </React.Fragment> :
                                level === 2 ?
                                    <React.Fragment>
                                        <Col className="Signup-Header-Text mb-5">
                                            Enter OTP
                                        </Col>
                                        <Col>
                                            <Row className="w-75 m-auto">
                                                <Col>
                                                    <Input className="OTP_Input" />
                                                </Col>
                                                <Col>
                                                    <Input className="OTP_Input" />
                                                </Col>
                                                <Col>
                                                    <Input className="OTP_Input" />
                                                </Col>
                                                <Col>
                                                    <Input className="OTP_Input" />
                                                </Col>
                                                <Col>
                                                    <Input className="OTP_Input" />
                                                </Col>
                                                <Col>
                                                    <Input className="OTP_Input" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className="mt-5">
                                                <Col>
                                                    <Button className="btn" onClick={() => setLevel(level - 1)}> Change Number </Button>
                                                </Col>
                                                <Col>
                                                    <Button className="btn" onClick={() => setLevel(level + 1)}>Submit</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </React.Fragment> :
                                    <React.Fragment>
                                        <Col className="Signup-Header-Text mb-5">
                                            Fill Basic Details
                                        </Col>
                                        <Col>
                                            <Input className="p-3 mb-4" placeholder="Name" />
                                        </Col>
                                        <Col>
                                            <Input className="p-3 mb-4" placeholder="Email (optional)" />
                                        </Col>
                                        <Col>
                                            <Input className="p-3 mb-4" placeholder="Address" />
                                        </Col>
                                        <Row className="mt-5">
                                            <Col>
                                                <Button className="btn" onClick={() => setLevel(level - 1)}>Go Back</Button>
                                            </Col>
                                            <Col>
                                                <Button className="btn">Submit</Button>
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                        }
                    </Col>
                </Row>
            </Container >
        </React.Fragment >
    )
}

export default SignUp;
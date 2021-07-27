import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Button } from 'reactstrap';

const Login = () => {
    return (
        <React.Fragment>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Row className="auth-main-container">
                            <Col className="bg-bg-success auth-current-side text-center p-md-5">
                                <Col md="" className="Signup-Header-Text mb-5">
                                    Log In
                                </Col>
                                <Col>
                                    <form>
                                        <Input
                                            className="p-3 mb-4"
                                            placeholder="Enter your mobile / Email"
                                            name="username"
                                            type="text"
                                        />
                                        <Input
                                            className="p-3 mb-4"
                                            placeholder="Password"
                                            name="password"
                                            type="password"
                                        />
                                        <Row>
                                            <Col>

                                                Forgot your Password?

                                            </Col>
                                        </Row>

                                        <Button className="btn mt-5">Log In</Button>
                                    </form>
                                    <div className="signup-login-mobile mt-4">
                                        New to FinBook? <a href="/signup"><u>Sign Up</u></a>
                                    </div>
                                </Col>
                            </Col>
                            <Col md="6" className="signup-login-side m-auto text-center">
                                <div className="signup-login-head-primary mb-4">
                                    Hello, Boi!
                                </div>
                                <div className="signup-login-head-secondary mb-4">
                                    Enter your personal details and start journey with us
                                </div>
                                <Link to="/signup">
                                    <Button className="invert-btn">Sign Up</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment >
    )
}

export default Login;
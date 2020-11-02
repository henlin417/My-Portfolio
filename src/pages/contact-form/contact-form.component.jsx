import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:henryling66@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="henryling66@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="]" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn ****
                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/henlin417" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.youtube.com/user/TheHenryling/videos" target="_blank" rel="noopener noreferrer">
                                <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                                    <i class="fab fa-youtube"></i> Youtube
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="tel:+4086219402" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="Call or text me at (408)621-9402">
                                    <i className="fas fa-phone"></i> Phone Number
                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;
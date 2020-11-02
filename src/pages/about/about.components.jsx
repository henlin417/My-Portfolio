import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail roundedCircle />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi! I am <strong>&nbsp;Henry Ling</strong>
                <br />A passionate programmer, born and raised in the Bay Area. I am a  front-end developer with  with HTML, CSS, React,js, and Node.js as my tech stack.
                <br /> <br />
                I believe that in the current information age, one's education is determined by grit and determination. Using a variety of online resources, I started my self taught journey at the beginning of 2020.
                <br /> <br />
                The purpose of this portfolio is to showcase my ability to solve problems and build scalable products. 
                <br /> 
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
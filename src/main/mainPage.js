import React from "react";
import { Col, Row } from "antd";
import "./mainPage.css";
import banner from "../asset/Images/banner.svg";
import girl2 from "../asset/Images/girl2.svg";


function mainPage() {
    return (
        <div className="main-page">
            <Row xs={24} sm={24} md={24} lg={24} xl={12} >

                <Col xs={24} sm={24} md={24} lg={24} xl={12} >

                    <img src={banner} alt="Snow" className="banner" />
                    <ul className="nav-ul">
                        <li className="nav-ul">BrandName</li>
                        <li className="nav-ul">Home</li>
                        <li className="nav-ul">Product</li>
                        <li className="nav-ul">Pricing</li>
                        <li className="nav-ul">Contact</li>
                        <li className="nav-ul">Log in</li>
                        <button className="nav-ul">JOIN US</button>
                    </ul>
                    <p className="p-banner">Join Us</p>
                    <h1 className="h1-banner">25K+ STUDENTS TRUST US</h1>
                    <h4 className="h4-banner">Every day brings with it a fresh set of learning possibilities.</h4>
                    <button className="b1-banner">Join Us</button>
                    <button className="b2-banner">Learn More</button>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <img src={girl2} alt="" />
                </Col>
            </Row>
        </div>
    );
}

export default mainPage;

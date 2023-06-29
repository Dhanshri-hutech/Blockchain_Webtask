import React from "react";
import { Col, Row } from "antd";
import "./pageTwo.css";
import girl from "../asset/Images/girl.svg";

function pageTwo() {
    return (
        <div className="boxModel">
            <Row gutter={16} className="cardAlign">
                <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                    <img src={girl} alt="" />
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={6} >
                    <div>
                        <hr className="hr-pageTwo" />
                        <h2 className="h2-pageTwo">Our Popular Courses</h2>
                        <p className="p-pageTwo">
                            Problems trying to resolve the conflict between the two major
                            realms of Classical physics: Newtonian mechanics{" "}
                        </p>
                        <p className="pageTwo"> Learn More</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default pageTwo;

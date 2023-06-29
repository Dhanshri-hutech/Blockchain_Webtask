import React from 'react';
import { Col, Row } from "antd";
import "./pageThree.css";
import { Data1 } from "../util/sample.js";

function pageThree() {
    return (
        <div className="boxModel">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <p className="cardtext-p">Practice Advice</p>
                <h2 className="cardtext-h2">Approdable Packages</h2>
                <p className="cardtext">
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics  {" "}
                </p>
            </Col>
            <Row gutter={16} >
                {Data1.map(({ tag, title, description, img, val }) => (
                    <Col xs={2} sm={4} md={6} lg={8} xl={6} className="cardAlign">
                        <div className="cardpage3">
                            <img src={img} alt="error" className="imgpage3" />
                            <p>{tag}</p>
                            <h5>{title}</h5>
                            <h6>{val}</h6>
                            <p className="pagethree-p">{description}</p>
                        </div>
                    </Col>

                ))}

            </Row>
        </div>
    )
}
export default pageThree;

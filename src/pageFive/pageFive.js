import React from 'react';
import { Col, Row } from "antd";
import "./pageFive.css";
import { Data3 } from "../util/sample.js";

function pageThree() {
    return (
        <div className="boxModel">
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >

                <h2 className="cardtexth2">FAQ</h2>
                <p className="cardtextp">
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics  {" "}
                </p>
            </Col>
            <Row gutter={16} >
                {Data3.map(({ tag, title, description, img, val }) => (
                    <Col xs={2} sm={4} md={6} lg={8} xl={5} className="cardAlign5">
                        <div className="cardpage5">
                            <img src={img} alt="error" className="imgpage3" />
                            <h5 className="cardFive">{title}</h5>
                            <h6 className="Cardp">{description}</h6>
                        </div>
                    </Col>

                ))}

            </Row>
        </div>
    )
}
export default pageThree;

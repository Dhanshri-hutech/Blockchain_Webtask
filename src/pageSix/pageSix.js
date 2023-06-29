import React from "react";
import { Col, Row } from "antd";
import "./pageSix.css";

function pageSix() {
    return (
        <div className="boxModel">
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="cardAlign">
                <p className="cardtext-p">Newsletter</p>
                <h2 className="cardtext-h2">Get Quality Education</h2>
                <p className="cardtext">
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics {" "}
                </p>
            </Col>
            <Row gutter={16} className="cardAlign">
                <Col xs={24} sm={24} md={24} lg={24} xl={12} className="Search-pageSix">
                    <input className="SpageSix">

                    </input>
                    <button className="button-PageSix">Subscribe</button>
                </Col>
            </Row>
        </div>
    );
}
export default pageSix;

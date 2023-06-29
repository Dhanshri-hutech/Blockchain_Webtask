import React from "react";
import { Col, Row } from "antd";
import "./cardImage.css";
import { Data, Data1, Data2 } from "../util/sample.js";
import home from "../asset/Images/home.svg";
import book from "../asset/Images/book.svg";

function cardImage() {
    return (
        <div className="boxModel">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <p className="cardtext-p">Practice Advice</p>
                <h2 className="cardtext-h2">Most Popular Courses</h2>
                <p className="cardtext">
                    Problems trying to resolve the conflict <br />
                    between the two major realms of Classical physics: Newtonian mechanics{" "}
                </p>
            </Col>


            <Row gutter={16} >
                {Data.map(({ title, description, img }) => (
                    <Col xs={2} sm={4} md={6} lg={8} xl={6} className="cardAlign">
                        <div className="cardCss">
                            <img src={img} alt="error" className="cardimg" />
                            <h5 className="Card-h5">{title}</h5>
                            <hr className="line-Hr" />
                            <p className="Cardp">{description}</p>
                        </div>
                    </Col>

                ))}

            </Row>
        </div>
    );
}

export default cardImage;

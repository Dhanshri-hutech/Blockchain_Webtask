import React from 'react';
import { Col, Row } from "antd";
import "./pageFour.css";
import { Data2 } from "../util/sample.js";
import star from "../asset/Images/star.svg";
import bStar from "../asset/Images/bStar.svg";
function pageFour() {
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
                {Data2.map(({ title, description, img, tag }) => (
                    <Col xs={2} sm={4} md={6} lg={8} xl={6} className="cardAlign">
                        <div className="cardFour">
                            <img src={img} alt="error" />
                            <p className="Cardp4">{description}</p>
                            <span><img src={star} alt="err" /><img src={star} alt="err" /><img src={star} alt="err" /><img src={star} alt="err" /><img src={bStar} alt="err" /></span>
                            <h5 >{title}</h5>
                            <h6 className='pagef '>{tag}</h6>
                        </div>
                    </Col>

                ))}

            </Row>
        </div>
    )
}
export default pageFour;

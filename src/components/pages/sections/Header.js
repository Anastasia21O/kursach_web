import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import image from '../../../img/emblema.jpg'

function Header() {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="logo">
                    <Container>
                        <Row>
                            <Col className="col-2">
                                <img className="virsta-images" src={image} alt={"img"}/>
                            </Col>
                            <Col className="col-9">
                                <h1 className="mt-5 text-center">Департамент кадрової політики Міністерства оборони України</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="line-my"/>
        </div>
    )
}

export default Header;
import React from "react";
import {Container, Accordion} from "react-bootstrap";

let flag = false;

function Contacts() {
    return (
        <div className={"virsta-div-contacts"}>
            <Container>
                <h1>Контакти</h1>
                <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Телефон-факс (приймальня) Департаменту кадрової політики Міністерства оборони
                            України: </Accordion.Header>
                        <Accordion.Body>
                            044-244-08-22
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Веб-сайт</Accordion.Header>
                        <Accordion.Body>
                            <a href="/">google.com</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Директор Департаменту кадрової політики Міністерства оборони
                            України</Accordion.Header>
                        <Accordion.Body>
                            ЯЦИНО Олег Валентинович
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Заступник директора Департаменту кадрової політики Міністерства оборони
                            України</Accordion.Header>
                        <Accordion.Body>
                            полковник ПОВАР Василь Іванович
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Заступник директора Департаменту — начальник відділу управління кар’єрою та
                            комплектування офіцерами посад номенклатури Міністра оборони України Департаменту кадрової
                            політики Міністерства оборони України:</Accordion.Header>
                        <Accordion.Body>
                            полковник АНДРУСЯК Марк Володимирович
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Заступник директора Департаменту — начальник відділу кадрової роботи з
                            державними службовцями та керівниками державних підприємств Департаменту кадрової політики
                            Міністерства оборони України</Accordion.Header>
                        <Accordion.Body>
                            МАЛИНОВСЬКИЙ Павло Степанович
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Адреса Департаменту кадрової політики Міністерства оборони
                            України: </Accordion.Header>
                        <Accordion.Body>
                            03168, м. Київ-168, Повітрофлотський проспект, 6
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" >
                        <Accordion.Header>Ми на карті</Accordion.Header>
                        <Accordion.Body>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.552919934165!2d30.53881331164895!3d50.4292116344382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0c1e037bfd%3A0x8907f87c86d17eec!2sViti%20Iszi!5e0!3m2!1sru!2sua!4v1637312195405!5m2!1sru!2sua"
                                className="iframe"
                                allowFullScreen=""
                                loading="lazy"
                            >
                            </iframe>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}



export default Contacts;
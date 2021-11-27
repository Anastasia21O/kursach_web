import React from "react";
import {Container, Nav, Button} from "react-bootstrap"
import {Link} from "react-router-dom";


function Menu() {
    return (
        <div className="menu">
            <Container>
                <Nav
                    // activeKey="/"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-primary">
                                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Головна</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-primary">
                                <Link to="/about" style={{textDecoration: 'none', color: 'white'}}>Про сайт</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-primary">
                                <Link to="/gallery" style={{textDecoration: 'none', color: 'white'}}>Галерея</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-primary">
                                <Link to="/news" style={{textDecoration: 'none', color: 'white'}}>Структурні відділи</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-primary">
                                <Link to="/contacts" style={{textDecoration: 'none', color: 'white'}}>Контакти</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}

export default Menu;
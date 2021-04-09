import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function index() {
    return (
        <main>
            <Container>
                <Row>
                    <Col md={8} sm={10}>
                        <div className="contact">
                            <h1>Contact</h1>
                            <p>Email: youremail@mail.com</p>
                            <p>Telephone: (111) 111-1111</p>
                            <p>Instagram: <a href="https://www.instagram.com/jerryspyrography/">https://www.instagram.com/jerryspyrography/</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

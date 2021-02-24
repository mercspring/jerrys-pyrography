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
                        <h1>Contact</h1>
                        <hr />
                        <p>Email: youremail@mail.com</p>
                        <p>Telephone: (111) 111-1111</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

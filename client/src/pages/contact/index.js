import {React, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageUtils from '../../utils/images';

export default function Contact() {
    const [phone, setPhone] = useState("example");
    const [email, setEmail] = useState("example@mail.com");

    useEffect(function(){
        imageUtils.getContact().then(result => {
            setPhone(result.data[0].phone);
            setEmail(result.data[0].email);
        })

    }, [])
    return (
        <main>
            <Container>
                <Row>
                    <Col md={8} sm={10}>
                        <div className="contact">
                            <h1>Contact</h1>
                            <p>Email: {email}</p>
                            <p>Telephone: {phone}</p>
                            <p>Instagram: <a href="https://www.instagram.com/jerryspyrography/">https://www.instagram.com/jerryspyrography/</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

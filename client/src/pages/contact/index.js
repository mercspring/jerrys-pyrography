import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageUtils from '../../utils/images';

export default function Contact(props) {
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    function useQuery() {
        return useLocation().search
    }

    console.log(useQuery())
    useEffect(function () {
    }, [])
    function onSendButtonClick(event){
        event.preventDefault();
        imageUtils.sendEmail({
            subject: subject,
            email: email,
            message: message
        }).then(results => {
            console.log(results);
            setSubject("");
            setEmail("");
            setMessage("");
        })

    }
    return (
        <main>
            <Container>
                <Row>
                    <Col md={8} sm={10}>
                        <div className="contact">
                            <h1>Contact Me</h1>
                            <form className="contact-form">
                                <div>
                                    <span>Email</span>
                                    <input id="email" type="text" name="email" value={email} onChange={e => {setEmail(e.target.value)}}/>
                                </div>
                                <div>
                                    <span>Subject</span>
                                    <input id="subject" type="text" name="subject" value={subject} onChange={e => {setSubject(e.target.value)}}/>
                                </div>
                                <div>
                                    <span>Message</span>
                                    <textarea id="message" name="message"value={message} value={message} onChange={e => {setMessage(e.target.value)}}></textarea>
                                </div>
                                <button onClick={onSendButtonClick}>Send Message</button>
                            </form>
                            <h1 className="insta-heading">Connect with me on <a href="https://www.instagram.com/jerryspyrography/">Instagram</a></h1>
                            {/* <p>Instagram: <a href="https://www.instagram.com/jerryspyrography/">https://www.instagram.com/jerryspyrography/</a></p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

import { React, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageUtils from '../../utils/images';

export default function Contact(props) {
    const [subject, setSubject] = useState("");
    const [thankYou, setThankYou] = useState(false);
    const [sorry, setSorry] = useState(false)
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disableSendButton, setdisableSendButton] = useState(false);
    const query = useQuery();
    function useQuery() {
        // return useLocation().search
        const location = useLocation()
        const searchTerms = new URLSearchParams(location.search)
        return {
            imageUrl: searchTerms.get("imageurl"),
            caption: searchTerms.get("caption"),
            price: searchTerms.get("price"),
        }
    }


    useEffect(function () {
        console.log(query.wow);       
        if(query.imageUrl != null && query.price != null){
            setSubject(`Interested in Buying: ${query.caption}`)
            setMessage(
            `Hi Jerry, \nI'm interested in buying this piece of art:\n\n${query.imageUrl} \n\nI see that it is listed for ${query.price} and I would be happy to pay ${query.price} for it.\n\nsincerely,`)
        }
  
    }, [])
    function onSendButtonClick(event){
        event.preventDefault();
        setdisableSendButton(true);
        imageUtils.sendEmail({
            subject: subject,
            email: email,
            message: message
        }).then(results => {
            return setThankYou(true); 
        }).catch(err => {
            return setSorry(true); 
        })

    }
    return (
        <main>
            <Container>
                <Row>
                    <Col md={8} sm={10}>
                        <div className="contact">
                            <h1>Contact Me</h1>
                            { query.imageUrl ?
                            <div>
                            <p> Please fill out the your <strong>name </strong>and <strong>email </strong>in the below form and hit send.</p>
                            <p>You can change the message but please <strong>leave the photo url</strong> so I know which piece you are inquring about.</p>
                            <p>Thanks, Jerry</p>
                            </div>
                                : ""}
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
                                    <button id="send-button" onClick={onSendButtonClick} disabled={(email && subject && message) || disableSendButton ? false : true}>Send Message</button> 
                            </form>
                            {/* <h1 className="insta-heading">Connect with me on <a href="https://www.instagram.com/jerryspyrography/">Instagram</a></h1> */}
                            {/* <p>Instagram: <a href="https://www.instagram.com/jerryspyrography/">https://www.instagram.com/jerryspyrography/</a></p> */}
                        </div>
                    </Col>
                </Row>
                {thankYou ? <Redirect to="/contact/thankyou"></Redirect> : ''}
                {sorry ? <Redirect to="/contact/sorry"></Redirect> : ""}
            </Container>
        </main>
    )
}

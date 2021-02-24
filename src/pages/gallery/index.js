import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Gallery() {
    const [pictures, setPictures] = useState(["https://picsum.photos/200"]);
    useEffect(() => {

    }, [])

    return (
        <main>
            <Container>
                <Row>
                    <Col md={11}>
                        <h1>Art Work</h1>
                        <hr/>
                        <Row noGutters={true} >
                            {new Array(500).fill("https://picsum.photos/200").map((imageURL, index) => {
                                return (<Col className="my-3 justify-content-center" sm={6} md={4} lg={3} id={index}>
                                    <img loading="lazy" className="mx-auto d-flex" src={imageURL} alt="art"></img>
                                </Col>)
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>

        </main>
    )
}

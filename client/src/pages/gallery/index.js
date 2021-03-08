import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lightbox from 'react-spring-lightbox';


export default function Gallery() {

    const [pictures, setPictures] = useState(new Array(300).fill("https://picsum.photos/200"));
    useEffect(() => {

    }, [])


    const images = [{
        src: "/images/IMG_0466.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_0556.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_0720.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_0972.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_0984.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_2385.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_2633.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_2666.jpeg",
        alt: "art"
    },{
        src: "/images/IMG_2918.jpeg",
        alt: "art"
    }
    ]
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const gotoPrevious = () => {

        setCurrentIndex(currentImageIndex - 1)
    };

    const gotoNext = () => {

        setCurrentIndex(currentImageIndex + 1)
    };

    return (
        <main>
            <Container>
                <Row>
                    <Col md={11}>
                        <h1>Gallery</h1>
                        <hr />
                        <Row noGutters={true} >
                            {images.map((imageURL, index) => {
                                return (<Col className="my-3 justify-content-center" sm={6} md={4} key={index}>
                                    <img onClick={() => { setCurrentIndex(index); setIsOpen(true) }} style={{maxHeight:"300px", maxWidth:"300px"}} loading="lazy" className="mx-auto d-flex" src={imageURL.src} alt="art"></img>
                                </Col>)
                            })}
                        </Row>
                        <Lightbox

                            isOpen={isOpen}

                            onPrev={gotoPrevious}

                            onNext={gotoNext}

                            onClose={() => setIsOpen(false)}

                            images={images}

                            currentIndex={currentImageIndex}


                        />
                    </Col>
                </Row>
            </Container>

        </main>
    )
}

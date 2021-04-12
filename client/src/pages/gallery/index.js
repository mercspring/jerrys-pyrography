import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lightbox from 'react-spring-lightbox';
import imageUtils from '../../utils/images.js';


export default function Gallery() {

    const [pictures, setPictures] = useState(new Array(300).fill("https://picsum.photos/200"));
    useEffect(() => {
        imageUtils.getImages().then((result) => {

            setPictures(result.data.map(image => {
                image.src = image.url;
                return image
            }))

        })

    }, [])


    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const gotoPrevious = () => {
        if (currentImageIndex === 0) {
            setCurrentIndex(pictures.length - 1);
            return
        }
        setCurrentIndex(currentImageIndex - 1)
    };

    const gotoNext = () => {

        if (currentImageIndex === pictures.length - 1) {
            setCurrentIndex(0);
            return
        }
        setCurrentIndex(currentImageIndex + 1)
    };

    return (
        <main>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Gallery</h2>
                        <hr />
                        <Row noGutters={true} >
                            <ul>
                                {
                                    pictures.map((image, index) => {
                                        return (
                                            <li key={index}>
                                                <img src={image.src} alt={image.caption} onClick={() => { setCurrentIndex(index); setIsOpen(true) }}></img>
                                            </li>
                                        )
                                    })
                                }
                                <li></li>
                            </ul>
  
                        </Row>
                        <Lightbox

                            renderFooter={() => <div className="footer-lightbox">
                                <div>
                                    <p>
                                        {pictures[currentImageIndex].caption}
                                    </p>
                                    <p>
                                        Price: {pictures[currentImageIndex].sold === 1 ? pictures[currentImageIndex].pricing : "Not For Sale"}
                                    </p>
                                    <p>
                                        Dimensions: {pictures[currentImageIndex].size}
                                    </p>
                                </div>
                            </div>}

                            isOpen={isOpen}

                            onPrev={gotoPrevious}

                            onNext={gotoNext}

                            onClose={() => setIsOpen(false)}

                            images={pictures}

                            currentIndex={currentImageIndex}

                            style={{ display: "flex", justifyContent: "end", background: "grey", }}


                        />
                    </Col>
                </Row>
            </Container>

        </main>
    )
}

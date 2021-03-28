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


    // const images = [{
    //     src: "/images/IMG_0466.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_0556.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_0720.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_0972.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_0984.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_2385.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_2633.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_2666.jpeg",
    //     alt: "art"
    // },{
    //     src: "/images/IMG_2918.jpeg",
    //     alt: "art"
    // }
    // ]
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
                    <Col md={11}>
                        <h1>Gallery</h1>
                        <hr />
                        <Row noGutters={true} >
                            <ul>
                                {
                                    pictures.map((image, index) => {
                                        return (
                                            <li >
                                                <img src={image.src} alt={image.caption} onClick={() => { setCurrentIndex(index); setIsOpen(true) }}></img>
                                                <p>{image.caption}</p>
                                            </li>
                                        )
                                    })
                                }
                                <li></li>
                            </ul>
                            {/* {pictures.map((image, index) => {
                                return (<Col className="my-3 justify-content-center" sm={6} md={4} key={index}>
                                    <img onClick={() => { setCurrentIndex(index); setIsOpen(true) }} style={{ maxHeight: "300px", maxWidth: "300px" }} loading="lazy" className="mx-auto d-flex" src={image.url} alt="art"></img>
                                </Col>)
                            })} */}
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

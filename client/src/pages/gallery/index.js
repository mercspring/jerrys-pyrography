import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Arrow from '../../components/Arrow';
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

    const gotoPrevious = (event) => {
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
                                            <li className="gallery-box" key={index}>

                                                <img className={image.sold ? "gallery-img" : "gallery-img-nfs"} src={image.src} alt={image.caption} onClick={() => { setCurrentIndex(index); setIsOpen(true) }}></img>

                                                {
                                                    image.sold ?
                                                        <div className="gallery-text-container">
                                                            <span className="gallery-text-label">Pricing</span>
                                                            <span className="gallery-text-label"> - </span>
                                                            <span className="gallery-text-price">{image.pricing}</span>
                                                        </div>
                                                        :
                                                        <span style={{ display: "none" }}></span>
                                                }
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
                                    <span>
                                        {pictures[currentImageIndex].caption}
                                    </span>
                                    <span className="spacer"> {pictures[currentImageIndex].caption ? "|" : ""}</span>
                                    <span>
                                        {pictures[currentImageIndex].sold && (pictures[currentImageIndex].pricing) ? "Price: " + pictures[currentImageIndex].pricing : "Not For Sale"}
                                    </span>
                                    <span className="spacer">|</span>
                                    <span>
                                        Dimensions: {pictures[currentImageIndex].size}
                                    </span>
                                    {pictures[currentImageIndex].sold && (pictures[currentImageIndex].pricing) ? <span className="spacer">|</span> : ""}
                                    {pictures[currentImageIndex].sold && (pictures[currentImageIndex].pricing) ? <a href={`/contact?imageurl=${pictures[currentImageIndex].src}&price=${pictures[currentImageIndex].pricing}&caption=${pictures[currentImageIndex].caption}`}>Inquire about purchasing</a> : ""}
                                </div>
                            </div>}

                            isOpen={isOpen}

                            onPrev={gotoPrevious}

                            onNext={gotoNext}

                            onClose={() => setIsOpen(false)}

                            images={pictures}

                            currentIndex={currentImageIndex}
                            renderPrevButton={() => {
                                return (<button onClick={gotoPrevious} style={{ position: "fixed", left: 0, fontSize: "30pt", border: "none", zIndex: "1", backgroundColor: "transparent" }}>
                                    ❮
                                </button>)
                            }}
                            renderNextButton={() => {
                                return (<button onClick={gotoNext} style={{ position: "fixed", right: 0, fontSize: "30pt", zIndex: "1", backgroundColor: "transparent", border: "none" }}>
                                    ❯
                                </button>)
                            }}

                            renderHeader={() => {
                                return (
                                    <button
                                        style={{ position: "fixed", right: 10, top: 0, fontSize: "25pt", zIndex: "1", border: "none", backgroundColor: "transparent", lineHeight: "1.75rem" }}
                                        onClick={() => setIsOpen(false)}>
                                        x
                                    </button>
                                )
                            }}

                            style={{ display: "flex", justifyContent: "end", background: "grey", }}


                        />
                    </Col>
                </Row>
            </Container>

        </main>
    )
}

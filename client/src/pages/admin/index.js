import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import AddModal from '../../components/modal_add'
import ImageCard from '../../components/card'
import imageUtils from '../../utils/images.js';
import AboutEdit from '../../components/AboutEdit'

export default function Admin() {

    const [show, setShow] = useState(false);
    const [images, setImages] = useState([]);
    const [about, setAbout] = useState([]);



    useEffect(() => {
        imageUtils.getImages().then((result) => {
            setImages(result.data)
        })
        imageUtils.getAbout().then((result) => {
            setAbout(result.data[0].about)
        })

    }, [show])

    return (
        <div className="admin">
            <hr/>
            <Button onClick={() => (setShow(true))}> Add New Art Photo</Button>
            <hr/>
            <CardDeck>
                {images ? images.map((image,index) => {
                    return (<ImageCard
                        id={image.id}
                        key={index}
                        caption={image.caption}
                        sold={image.sold}
                        pricing={image.pricing}
                        url={image.url}
                        size={image.size}
                        images={images}
                        setImages={setImages}
                    ></ImageCard>)}) : <p>Images go here, upload some</p>}
            </CardDeck>
            <AboutEdit about={about} setAbout={setAbout}></AboutEdit>
            <AddModal show={show} setShow={setShow}></AddModal>

        </div>
    )
}

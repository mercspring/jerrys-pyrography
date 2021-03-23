import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import AddModal from '../../components/modal_add'
import ImageCard from '../../components/card'
import imageUtils from '../../utils/images.js';

export default function Admin() {

    const [show, setShow] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        imageUtils.getImages().then((result) => {
            console.log("images:",result.data)
            setImages(result.data)
        })
    }, [])

    return (
        <div className="admin">
            Admin Page
            <Button onClick={() => (setShow(true))}> Show Modal</Button>
            <div>
                {images ? images.map((image,index) => {
                    console.log(image);
                    return (<ImageCard
                        id={image.id}
                        key={index}
                        caption={image.caption}
                        sold={image.sold}
                        pricing={image.pricing}
                        url={image.url}
                        size={image.size}
                    ></ImageCard>)}) : <p>Images go here, upload some</p>}
            </div>
            <AddModal show={show} setShow={setShow}></AddModal>

        </div>
    )
}

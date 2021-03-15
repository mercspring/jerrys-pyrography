import React from 'react';
import { useState } from 'react';
import imageUtils from '../../utils/images.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddModal from '../../components/modal_add'

export default function Admin() {
    const handleImageUpload = () => {
        if (document.querySelector('input[type="file"]').files.length > 0) {
            const { files } = document.querySelector('input[type="file"]');
            imageUtils.upload(files[0]).then(function (result) {

            })

        }
    }
    const [show, setShow] = useState(false)

    return (
        <div className="admin">
            Admin Page
            <button onClick={handleImageUpload}>Add a new Photo</button>
            <input type="file" />
            <Button onClick={() => (setShow(true))}> Show Modal</Button>
            <AddModal show={show} setShow={setShow}></AddModal>

        </div>
    )
}

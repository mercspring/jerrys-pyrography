import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imageUtils from '../../utils/images.js';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';

export default function ModalAdd(props) {

    //Form Control Staes
    const [caption, setCaption] = useState("")
    const [pricing, setPricing] = useState("")
    const [size, setSize] = useState("")
    const [url, setUrl] = useState("")
    const [sold, setSold] = useState(false)

    const onChange = (event) => {
        console.log(event.target.name);

        setInfo({...info,})


    }
    const onRadioChange = (event) => {
        const clicked = event.target.id
        if(clicked === "forSale"){
        console.log("yes");

        } else {
            console.log("no");
        }

    }
    const upload = (event) => {
        console.log()
    }
    const handleImageUpload = (event) => {
        event.preventDefault();

        if (document.querySelector('#image-upload').files.length > 0) {
            const { files } = document.querySelector('input[type="file"]');
            imageUtils.upload(files[0]).then(function (result) {

            })

        }
    }
    return (
        <div>

            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onHide={() => (props.setShow(false))}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h2>Upload a Photo</h2>
                        <hr />
                        <p>Choose and image of the art work and then hit the upload button to upload</p>
                        <input className="my-1" type="file" id="image-upload" />
                        <br />
                        {/* <Button variant="primary" type="submit" onClick={handleImageUpload}>
                            Upload a photo
                        </Button> */}
                        <h2>Add info about the photo</h2>
                        <hr />
                        <Form.Group controlId="formCaption">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control name="caption" placeholder="Please enter a caption" onChange={onChange} />
                        </Form.Group>

                        <Form.Group controlId="formPricing">
                            <Form.Label>Price of Art Work</Form.Label>
                            <Form.Control name="pricing" placeholder="Please enter a price for the piece (if it's for sale)" onChange={onChange} />
                        </Form.Group>

                        <Form.Group controlId="formSize">
                            <Form.Label>Size of Piece</Form.Label>
                            <Form.Control name="size" placeholder="Please enter the dimensions of the piece e.g. 12x12" onChange={onChange} />
                        </Form.Group>

                        <Form.Group controlId="formSold">
                            <Form.Label>For Sale</Form.Label>
                            <Form.Check type="radio" label="Yes" name="forSale" id="forSale" onChange={onRadioChange} />
                            <Form.Check type="radio" label="No" name="forSale" id="notForSale" onChange={onRadioChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={upload}>
                            Upload
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => (props.setShow(false))}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

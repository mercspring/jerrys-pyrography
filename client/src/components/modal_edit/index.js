import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imageUtils from '../../utils/images.js';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';

export default function ModalEdit(props) {

    //Form Control Staes
    const [caption, setCaption] = useState(props.caption)
    const [price, setPrice] = useState(props.price)
    const [size, setSize] = useState(props.size)
    const [url, setUrl] = useState(props.url)
    const [sold, setSold] = useState(props.sold)

    const onRadioChange = (event) => {
        const clicked = event.target.id
        if (clicked === "forSale") {
            setSold(false)

        } else {
            setSold(true)
        }

    }
    const edit = (event) => {
        event.preventDefault();

        if (document.querySelector('#image-upload').files.length > 0) {
            const { files } = document.querySelector('input[type="file"]');
            imageUtils.upload(files[0]).then(function (result) {
                setUrl(result.data.url)
                const data = {
                    id: props.id,
                    pricing: price,
                    caption,
                    size,
                    url: result.data.url,
                    sold: sold ? 0 : 1 
                }
                console.log(data)
                props.setImages(props.images.map(image => {
                    if(image.id === props.id){
                        return data
                    } else {
                        return image
                    }
                }))
                imageUtils.editImage(data, props.token).then(confirm => {
                    console.log(confirm)
                })

            })
        } else {
            const data = {
                id: props.id,
                pricing: price,
                caption,
                size,
                url,
                sold: sold ? 0 : 1
            }
            imageUtils.editImage(data).then(confirm => {
                console.log(confirm)
                props.setImages(props.images.map(image => {
                    if(image.id === props.id){
                        return data
                    } else {
                        return image
                    }
                }))
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
                        <h2>Add info about the photo</h2>
                        <hr />
                        <Form.Group controlId="formCaption">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control value={caption} name="caption" placeholder="Please enter a caption" onChange={event => setCaption(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formPricing">
                            <Form.Label>Price of Art Work</Form.Label>
                            <Form.Control value={price} name="pricing" placeholder="Please enter a price for the piece (if it's for sale)" onChange={event => setPrice(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formSize">
                            <Form.Label>Size of Piece</Form.Label>
                            <Form.Control value={size} name="size" placeholder="Please enter the dimensions of the piece e.g. 12x12" onChange={event => setSize(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formSold">
                            <Form.Label>For Sale</Form.Label>
                            <Form.Check checked={sold ? false : true} type="radio" label="Yes" name="forSale" id="forSale" onChange={() => setSold(false)} />
                            <Form.Check checked={sold ? true : false} type="radio" label="No" name="forSale" id="notForSale" onChange={() => setSold(true)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={edit}>
                            Save Changes
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
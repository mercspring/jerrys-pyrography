import { React, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import EditModal from '../modal_edit';
import imageUtils from '../../utils/images.js'

export default function ImageCard(props) {
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(false);
    return (
        <div>
            <Card as="myCard">
                <Card.Img variant="top" src={props.url} style={{ width: "13vw", minWidth:"100%"}} />
                <Card.Body>
                    <Card.Text>
                        {props.caption}
                    </Card.Text>
                    <Card.Text>
                        For Sale: {props.sold === 1 ? "Yes" : "No"}
                    </Card.Text>
                    <Card.Text>
                        Price: {props.pricing}
                    </Card.Text>
                    <Card.Text>
                        Size: {props.size}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>

                    <button id="edit-button" onClick={() => setShow(true)}>Edit</button>
                    <button id="delete-button" onClick={() => setAlert(true)}> Delete</button>
                   {alert ? <Alert style ={{width: "20rem"}} variant="danger" onClose={() => setAlert(false)} dismissible>
                        <p>
                            Are you sure you want to Delete this image? This can not be undone.
                        </p>
                        <button onClick={() => setAlert(false)}>No</button>
                        <button onClick={() => {
                            imageUtils.deleteImage(props.id);
                            setAlert(false);
                            props.setImages(props.images.filter((image) => {
                                return image.id != props.id
                            }))
                        }}>Yes</button>
                    </Alert> : ""}
                </Card.Footer>
            </Card>
            <EditModal show={show}
                setShow={setShow}
                id={props.id}
                caption={props.caption}
                sold={props.sold}
                price={props.pricing}
                url={props.url}
                size={props.size}
                images={props.images}
                setImages={props.setImages}
            ></EditModal>


        </div>
    )
}

import {React, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditModal from '../modal_edit';

export default function ImageCard(props) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={props.url} style={{ width: "400px" }} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
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

                    <Button onClick={() => setShow(true)}>Edit</Button>
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

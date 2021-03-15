import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalAdd(props) {
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
                    <h4>Centered Modal</h4>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => (props.setShow(false))}>Close</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

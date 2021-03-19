import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddModal from '../../components/modal_add'

export default function Admin() {

    const [show, setShow] = useState(false)

    return (
        <div className="admin">
            Admin Page
            <Button onClick={() => (setShow(true))}> Show Modal</Button>
            <AddModal show={show} setShow={setShow}></AddModal>

        </div>
    )
}

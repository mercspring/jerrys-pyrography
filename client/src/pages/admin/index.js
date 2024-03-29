import React from 'react';
import { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import AddModal from '../../components/modal_add'
import ImageCard from '../../components/card'
import imageUtils from '../../utils/images.js';
import AboutEdit from '../../components/AboutEdit'
import Signin from '../../components/Signin'
import PasswordEdit from '../../components/PasswordEdit'
import ContactEdit from '../../components/ContactEdit'

export default function Admin() {

    const [show, setShow] = useState(false);
    const [images, setImages] = useState([]);
    const [about, setAbout] = useState([]);
    const [contact, setContact] = useState([]);
    const [signedin, setSignedin] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {

    }, [])

function changeImageQuality(){
    imageUtils.updateQuality(token);
}

    useEffect(() => {
        imageUtils.getImages().then((result) => {
            setImages(result.data)
        })
        imageUtils.getAbout().then((result) => {
            setAbout(result.data[0].about)
        })
        imageUtils.getContact().then(result => {
            setContact(result.data[0])
        })

    }, [show])

    return (
        <div>
            {
                !token ? <Signin token={token} setToken={setToken}></Signin> :
                    <div className="admin">
                        <hr />
                        <h2 className="add-photo-heading">Add a Photo</h2>
                        <button onClick={() => (setShow(true))}> Add New Art Photo</button>
                        <h2>Edit a Photo</h2>
                        <hr />
                        <CardDeck>
                            {images ? images.map((image, index) => {
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
                                    token={token}
                                ></ImageCard>)
                            }) : <p>Images go here, upload some</p>}
                        </CardDeck>
                        <h2>Edit About</h2>
                        <hr />
                        <AboutEdit about={about} setAbout={setAbout} token={token}></AboutEdit>
                        <h2>Edit Contact</h2>
                        <hr />
                        <ContactEdit token={token} phone={contact.phone} email={contact.email} setContact={setContact}></ContactEdit>
                        <h2>Set a New Password</h2>
                        <hr />
                        <PasswordEdit></PasswordEdit>
                        {/* <div>
                            <button onClick={changeImageQuality}>Update Image Quality</button>
                        </div> */}
                        <AddModal show={show} setShow={setShow} token={token}></AddModal>
                    </div>

            }

        </div>
    )
}

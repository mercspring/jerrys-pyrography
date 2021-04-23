import {React, useState, useEffect} from 'react'
import imageUtils from '../../utils/images.js';

export default function ContactEdit(props) {
    const [emailBuffer, setEmailBuffer] = useState("");
    const [phoneBuffer, setPhoneBuffer] = useState("");
    const [makeChange, setMakeChange] = useState(true);


    useEffect(function(){
        setEmailBuffer(props.email);
        setPhoneBuffer(props.phone);

    }, [props.email, props.phone])

    function updateContact(){
        imageUtils.updateContact({ phone: phoneBuffer, email: emailBuffer }, props.token).then((result) => {
            console.log("about", result.data)
        })
    }
    return (
        <div className="contact-edit">
            <div>
                <label for="email">Email:</label>
                <input disabled={makeChange} id="email" type='text' name="email" value={emailBuffer} onChange={e => {setEmailBuffer(e.target.value)}}></input>
            </div>
            <div>
                <label for="phone-number">Phone Number:</label>
                <input disabled={makeChange} id="phone-number" type='text' value={phoneBuffer} onChange={e => {setPhoneBuffer(e.target.value)}}></input>
            </div>
            <button onClick={() => {props.setContact({about: phoneBuffer, email: emailBuffer}); setMakeChange(true); updateContact()}}>Save Changes</button>
            { makeChange ? <button onClick={() => setMakeChange(false)}>Edit Contact</button>
           : <button onClick={() => {setMakeChange(true); setEmailBuffer(props.email); setPhoneBuffer(props.phone)}}>Cancel</button> }
        </div>
    )
}

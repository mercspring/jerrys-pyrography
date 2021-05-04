import {React, useState, useEffect} from 'react'
import imageUtils from '../../utils/images.js';

export default function PasswordEdit() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    function submit(){
        if(newPassword === confirmPassword && newPassword.length >= 8){
            console.log("passwords match")
            imageUtils.setPassword(newPassword).then(results => {
                console.log(results)
            })
        } else {
            console.log("passwords don't match")

        }
    }
    return (
        <div>
            <p>Type the password twice to confirm. Password must be at least 8 charecters </p> 
            <p>Passwords match: {newPassword === confirmPassword && newPassword.length >= 8 ? "✅" : "❌"}</p>
             <div>
                <label for="new-password">New Password:</label>
                <input id="new-password" type='text' name="new-password" value={newPassword} onChange={e => {setNewPassword(e.target.value)}}></input>
            </div>
             <div>
                <label for="confirm-pasword">Confirm New Password</label>
                <input id="confirm-password" type='text' name="confirm-password" value={confirmPassword} onChange={e => {setConfirmPassword(e.target.value)}}></input>
            </div>
            <button onClick={submit}>Change Password</button>
        </div>
    )
}

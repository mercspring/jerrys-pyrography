import {React, useState, useEffect} from 'react'
import imageUtils from '../../utils/images.js';

export default function PasswordEdit() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
             <div>
                <label for="new-password">New Password:</label>
                <input id="new-password" type='text' name="new-password" value={newPassword} onChange={e => {setNewPassword(e.target.value)}}></input>
            </div>
             <div>
                <label for="confirm-pasword">Confirm New Password</label>
                <input id="confirm-password" type='text' name="confirm-password" value={confirmPassword} onChange={e => {setConfirmPassword(e.target.value)}}></input>
            </div>
            
        </div>
    )
}

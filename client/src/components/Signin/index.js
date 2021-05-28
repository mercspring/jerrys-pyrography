import {React, useState, useEffect} from 'react'

import imageUtils from '../../utils/images';

export default function Signin(props) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function signin(){
        imageUtils.signin({password: password, username: username}).then(result => {
            console.log(result)
            props.setToken(result.data.token)
            console.log(result.data.token);

        })
    }

    return (
        <div className="signin">

            <label for="username">User Name</label>
            <input name="username" onChange={(e) => setUsername(e.target.value)} value={username}></input>

            <label for="password" >Password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

           <button onClick={() => {signin()}}>Sign In</button> 
        </div>
    )
}

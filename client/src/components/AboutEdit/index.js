import { React, useState, useEffect} from 'react'

export default function AboutEdit(props) {
    const [makeChange, setMakeChange] = useState(true);
    const [buffer, setBuffer] = useState(props.about);

    useEffect(function(){
        setBuffer(props.about)
    }, [props.about])


    return (
        <div className="about-edit" >
            <textarea onChange={(e) => setBuffer(e.target.value)} value={buffer} disabled={makeChange}>{buffer}</textarea>
            <button disabled = {makeChange} onClick={() => {props.setAbout(buffer); return setMakeChange(true)}}>Save Changes</button>
            {makeChange
                ? <button onClick={() => setMakeChange(false)}>Edit About</button>
                : <button onClick={() => {setMakeChange(true); return setBuffer(props.about)}}>Cancel</button>
            }
        </div>
    )
}

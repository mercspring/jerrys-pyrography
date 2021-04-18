import { React, useState, useEffect } from 'react';
import imageUtils from '../../utils/images.js';

export default function AboutEdit(props) {
    const [makeChange, setMakeChange] = useState(true);
    const [buffer, setBuffer] = useState("");

    useEffect(function () {
        setBuffer(props.about)
    }, [props.about])

    function updateAbout() {
        console.log("adkfljaslkfd", {about: buffer})
        imageUtils.updateAbout({ about: buffer }).then((result) => {
            console.log("about", result.data)
        })

    }


    return (
        <div className="about-edit" >
            <textarea onChange={(e) => setBuffer(e.target.value)} value={buffer} disabled={makeChange}>{buffer}</textarea>
            <button disabled={makeChange} onClick={() => { props.setAbout(buffer); updateAbout(); return setMakeChange(true) }}>Save Changes</button>
            {makeChange
                ? <button onClick={() => setMakeChange(false)}>Edit About</button>
                : <button onClick={() => { setMakeChange(true); return setBuffer(props.about) }}>Cancel</button>
            }
        </div>
    )
}

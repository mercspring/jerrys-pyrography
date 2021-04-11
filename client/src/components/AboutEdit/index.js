import React from 'react'

export default function AboutEdit(props) {
    return (
        <div className="about-edit">
           <textarea value={props.about}></textarea> 
        </div>
    )
}

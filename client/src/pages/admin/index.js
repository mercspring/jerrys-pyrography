import React from 'react'
import imageUtils from '../../utils/images.js'

export default function Admin() {
    const handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]');
        imageUtils.upload(files[0]);
        console.log('Image file', files[0]);
      }
    return (
        <div className="admin">
            Admin Page
            <input type="file" onChange={handleImageUpload} />
            
        </div>
    )
}

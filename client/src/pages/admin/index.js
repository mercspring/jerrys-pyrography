import React from 'react'

export default function Admin() {
    const handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        console.log('Image file', files[0])
      }
    return (
        <div className="admin">
            Admin Page
            <input type="file" onChange={handleImageUpload} />
            
        </div>
    )
}

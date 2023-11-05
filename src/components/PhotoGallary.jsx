import React from 'react'

const PhotoGallary = ({src}) => {
    return (
        <div className='img-container'>
            <img src={src} alt="gal-img" />
        </div>
    )
}

export default PhotoGallary

import React from 'react'
import Button from './Button'
const TextCard = ({ headline, para1, para2 }) => {
    return (
        <div className='text-container'>
            <h1>{headline}</h1>
            <p>
                {para1}
            </p>
            <p>{para2}</p>
            <Button
                text={'Read More'}
                textColor={'#fff'}
                bg={'#FF3A2D'}
                fontSize={'0.9rem'}
                pl={'20px'}
                pr={'20px'}
                pt={'10px'}
                pb={'10px'}
            />
        </div>
    )
}

export default TextCard

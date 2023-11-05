import React from 'react'

const Button = ({text, textColor, fontSize, bg, pl, pr, pt, pb }) => {
    return (
        <button style={{
            color: textColor,
            backgroundColor: bg,
            paddingLeft: pl,
            paddingRight: pr,
            paddingTop: pt,
            paddingBottom: pb,
            borderRadius:'3px',
            borderStyle:'none',
            fontWeight:600,
            fontSize:fontSize,
        }}>
            {text}
        </button>
    )
}

export default Button

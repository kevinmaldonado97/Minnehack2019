import React from 'react'

const Button = ({color, children, onSubmit }) => {
    return (
        <button onClick={onSubmit} style={{backgroundColor: color, width: width}} className="btn">
            {children}
        </button>
    )
}

export default Button
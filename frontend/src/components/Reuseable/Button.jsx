import React from 'react';
import './Button.scss';
const Button = ({Content,className,type}) => {
    return (
        <button type={type} className={className}>
            {Content}
        </button>
    )
}

export default Button
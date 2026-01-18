import React from 'react';
import './InputField.scss';

const InputField = ({type,value,className,placeholder,onChange,name}) => {
    return (
        <input
            name={name}
            placeholder={placeholder}
            type={type}
            className={className}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputField
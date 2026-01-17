import React from 'react';
import './InputField.scss';

const InputField = ({Placeholder}) => {
    return (
        <input
            className="FieldInput"
            type="text"
            placeholder={Placeholder}
        />
    )
}

export default InputField
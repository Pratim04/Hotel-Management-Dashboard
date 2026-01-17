import React, { useState } from 'react';
import './CustomerForm.scss';
import CROSS from '../assets/Cross.svg';
import InputFieldComp from './Reuseable/InputField';
const CustomerForm = ({show,ClosePopUp}) => {
    if(!show)
        return null;
    return (
        <div className='customer-form'>
            <div className="form-header">
                <button className='closeBTN' onClick={ClosePopUp}>
                    <img src={CROSS} alt="CROSS" />
                </button>
            </div>
            <div className="form-area">
                <InputFieldComp Placeholder='Full name'/>
            </div>
        </div>
    )
}

export default CustomerForm
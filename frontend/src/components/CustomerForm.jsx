import React from 'react';
import './CustomerForm.scss';
import CROSS from '../assets/Cross.svg';
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
                {/* Customer Details Will be here */}
            </div>
        </div>
    )
}

export default CustomerForm
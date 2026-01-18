import React, { useState } from 'react';
import './CustomerForm.scss';
import CROSS from '../assets/Cross.svg';
import InputFieldComp from './Reuseable/InputField';
import ButtonComp from './Reuseable/Button';
const CustomerForm = ({ show, ClosePopUp }) => {

    // Handle Form Defualt Loading
    const FormHandle = (e) => {
        e.preventDefault()
        console.log("Working");
    }

    const [User, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        pinCode: "",
        NOP: "",
        NODays: "",
        NONight: "",
        CinDate: "",
        CoutDate: ""
    });

    const HandleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    if (!show)
        return null;
    return (
        <div className='customer-form'>
            <div className="form-header">
                <button className='closeBTN' onClick={ClosePopUp}>
                    <img src={CROSS} alt="CROSS" />
                </button>
            </div>
            <form className="Register-Form" onSubmit={FormHandle}>
                <div className="form-area">
                    <InputFieldComp name='firstname' placeholder='Enter your First Name' type='text' className='FieldInput' value={User.firstname} onChange={HandleInputChange} />
                    <InputFieldComp name='lastname' placeholder='Enter your Last Name' type='text' className='FieldInput' value={User.lastname} onChange={HandleInputChange} />
                    <InputFieldComp name='email' placeholder='Enter your Email' type='email' className='FieldInput' value={User.email} onChange={HandleInputChange} />
                    <InputFieldComp name='phone' placeholder='Enter your Phone Number' type='tel' className='FieldInput' value={User.phone} onChange={HandleInputChange} />
                    <InputFieldComp name='address' placeholder='Enter your Phone Address' type='text' className='FieldInput' value={User.address} onChange={HandleInputChange} />
                    <InputFieldComp name='pinCode' placeholder='Enter your Phone Pincode' type='text' className='FieldInput' value={User.pinCode} onChange={HandleInputChange} />
                    <InputFieldComp name='NOP' placeholder='Enter Number of people' type='number' className='FieldInput' value={User.NOP} onChange={HandleInputChange} />
                    <InputFieldComp name='NODays' placeholder='Number of Days' type='number' className='FieldInput' value={User.NODays} onChange={HandleInputChange} />
                    <InputFieldComp name='NONight' placeholder='Number of Night' type='number' className='FieldInput' value={User.NONight} onChange={HandleInputChange} />
                    <InputFieldComp name='CinDate' placeholder='Check in Date' type='date' className='FieldInput' value={User.CinDate} onChange={HandleInputChange} />
                    <InputFieldComp name='CoutDate' placeholder='Check out Date' type='date' className='FieldInput' value={User.CoutDate} onChange={HandleInputChange} />
                    
                    <ButtonComp type='Submit' className='ButtonStyle' Content='Submit'/>
                </div>
            </form>
        </div>
    )
}

export default CustomerForm
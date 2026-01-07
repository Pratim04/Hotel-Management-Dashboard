import React from 'react'
import './NewAddedCustomer.scss';
const NewAddedCustomer = ({ customers }) => {
    return (
    <div className='List-Container'>
        <h2>Customers</h2>
        { customers.map(customer => (
            <div className="MailDiv">
            <div className="name common">{customer.name}</div>
            <div className="email common">{customer.email}</div>
            <div className="time common">{customer.checkedIn ? customer.checkInDate : customer.checkOutDate}</div>
            <div className={`status common ${customer.checkedIn ? 'active' : 'inactive'}`}>{customer.status}</div>
        </div>
        ))}
        
    </div>
    )
}

export default NewAddedCustomer;
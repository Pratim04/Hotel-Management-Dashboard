import React from 'react'
import './NewAddedCustomer.scss';
const NewAddedCustomer = ({ customers,OpenModal }) => {
    return (
        <div className='List-Container'>
            <div className="List-header">
                <h2>Customers</h2>
                {/* OpenModal is set make the Modal visible or invisible */}
                <button className='add-new' onClick={OpenModal}>+</button>
                <div className="New-Customer">

                </div>
            </div>
            <div className="List">
                {customers.map(customer => (
                    // It will contain the Mails and map function will palce the mails according to the data
                    <div className="MailDiv" key={customer.id}>
                        <div className="name common">{customer.name}</div>
                        <div className="email common">{customer.email}</div>
                        <div className="time common">{customer.checkedIn ? customer.checkInDate : customer.checkOutDate}</div>
                        <div className={`status common ${customer.checkedIn ? 'active' : 'inactive'}`}>{customer.status}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewAddedCustomer;
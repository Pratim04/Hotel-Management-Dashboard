import "./Dashboard.scss";
import React , { useState }from 'react';
import Piechart from '../components/Charts/Piechart';
import GeoChart from '../components/Charts/GeoChart';
import Barchart from '../components/Charts/Barchart';
import CustomerForm from '../components/CustomerForm';
import StatCard from '../components/Charts/KPI/StatCard';
import NewCustomerList from '../components/NewAddedCustomer';
const Customer = [
    {
        "id": 1,
        "name": "Rahul Sharma",
        "email": "rahul.sharma@gmail.com",
        "status": "Active",
        "checkedIn": true,
        "checkInDate": "2026-01-05"
    },
    {
        "id": 2,
        "name": "Anita Das",
        "email": "anita.das@gmail.com",
        "status": "Checked Out",
        "checkedIn": false,
        "checkOutDate": "2026-01-04"
    },
    {
        "id": 3,
        "name": "Amit Roy",
        "email": "amit.roy@gmail.com",
        "status": "Active",
        "checkedIn": true,
        "checkInDate": "2026-01-06"
    },
    {
        "id": 4,
        "name": "Sneha Paul",
        "email": "sneha.paul@gmail.com",
        "status": "Checked Out",
        "checkedIn": false,
        "checkOutDate": "2026-01-03"
    },
    {
        "id": 5,
        "name": "Kunal Verma",
        "email": "kunal.verma@gmail.com",
        "status": "Active",
        "checkedIn": true,
        "checkInDate": "2026-01-07"
    },
    {
        "id": 6,
        "name": "Priya Sen",
        "email": "priya.sen@gmail.com",
        "status": "Active",
        "checkedIn": true,
        "checkInDate": "2026-01-08"
    },
    {
        "id": 7,
        "name": "Rohit Mallick",
        "email": "rohit.mallick@gmail.com",
        "status": "Checked Out",
        "checkedIn": false,
        "checkOutDate": "2026-01-06"
    },
    {
        "id": 8,
        "name": "Neha Chatterjee",
        "email": "neha.chatterjee@gmail.com",
        "status": "Active",
        "checkedIn": true,
        "checkInDate": "2026-01-09"
    },
    {
        "id": 9,
        "name": "Sourav Dutta",
        "email": "sourav.dutta@gmail.com",
        "status": "Checked Out",
        "checkedIn": false,
        "checkOutDate": "2026-01-05"
    },
    {
        "id": 10,
        "name": "Ishita Banerjee",
        "email": "ishita.banerjee@gmail.com",
        "status": "Active",
        "checkedIn": true,
        "checkInDate": "2026-01-10"
    }

]
function Dashboard() {
    const [showPopup, setShowPopup] = useState(false);
    return (
    <>
        <CustomerForm show={showPopup} ClosePopUp={()=>setShowPopup(false)}/>
        <div className="wrapper">
            <div className="test per-month-revenue">
                <Barchart />
            </div>
            <div className="test circle-chart">
                <Piechart />
            </div>
            <div className="test status-card">
                <StatCard
                    title={"Total-Revenue"}
                    value={"$15623"}
                    percentage={15.6}
                    isPositive={true}
                    />
                <StatCard
                    title={"New Customer"}
                    value={"56"}
                    percentage={6.3}
                    isPositive={true}
                    />
                <StatCard
                    title={"Loss"}
                    value={"$253"}
                    percentage={10}
                    isPositive={false}
                    />
                <StatCard
                    title="Employee"
                    value="41"
                    percentage={12}
                    isPositive={true}
                    />
            </div>
            <div className="test new-customer">
                <NewCustomerList customers={Customer} OpenModal={()=>setShowPopup(true)}/>
            </div>
            <div className="test map">
                <GeoChart />
            </div>
        </div>
    </>
    );
}

export default Dashboard;
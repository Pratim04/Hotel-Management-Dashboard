import React from 'react';
import "./Dashboard.scss";
import Barchart from '../components/Charts/Barchart';
import Piechart from '../components/Charts/Piechart';
import Linechart from '../components/Charts/Linechart';
import StatCard from '../components/Charts/KPI/StatCard';
import DoughnutChart from '../components/Charts/Doughnutchart';
import GeoChart from '../components/Charts/GeoChart';
function Dashboard() {
    return (
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
            <div className="test mail-chat"></div>
            <div className="test map">
                <GeoChart />
            </div>
        </div>
    );
}

export default Dashboard;
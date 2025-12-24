import React from 'react';
import "./Dashboard.scss";
import Barchart from '../components/Charts/Barchart';
import Piechart from '../components/Charts/Piechart';
import Linechart from '../components/Charts/Linechart';
import StatCard from '../components/Charts/KPI/StatCard';
import DoughnutChart from '../components/Charts/Doughnutchart';
function Dashboard() {
    return (
        <div className='main'>
            <div className='TR'>
                <StatCard
                    title="Total Revenue"
                    value="$124,500"
                    percentage={12.5}
                    isPositive={true}
                />
            </div>
            <div className='TU'>
                <StatCard
                    title="Total Orders"
                    value="2,340"
                    percentage={8.1}
                    isPositive={true}
                />
            </div>
            <div className='TL'>
                <StatCard

                    title="Total Loss"
                    value="$18,200"
                    percentage={-6.3}
                    isPositive={false}
                />
            </div>
            <div className="TN">
                <StatCard 
                    title="New User"
                    value="56"
                    percentage={15.3}
                    isPositive={true}
                />
            </div>
            <div className="barchart">
                <Barchart />
            </div>
            <div className="linechart">
                <Linechart />
            </div>
            <div className="piechart">
                <Piechart />
            </div>
            <div className="doughnutchart">
                <DoughnutChart />
            </div>
        </div>
    );
}

export default Dashboard;

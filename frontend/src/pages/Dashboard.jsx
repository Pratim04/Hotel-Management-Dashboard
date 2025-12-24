import React from 'react';
import "./Dashboard.scss";
import Barchart from '../components/Charts/Barchart';
import Piechart from '../components/Charts/Piechart';
import Linechart from '../components/Charts/Linechart';
import StatCard from '../components/Charts/KPI/StatCard';
import DoughnutChart from '../components/Charts/Doughnutchart';
function Dashboard() {
    return (
        <div className="wrapper">
            <div className="gridLayout">
                <div className="box box1">
                    <Barchart />
                </div>
                <div className="box box2">
                    <div className="wrap">
                    <StatCard 
                        className="TC"
                        title="New User"
                        value="56"
                        percentage={15.3}
                        isPositive={true}
                        />
                    <StatCard
                        className="TR"
                        title="Total Revenue"
                        value="$56540"
                        percentage={14.45}
                        isPositive={true}
                        />
                    <StatCard
                        className="TL"
                        title="Loss"
                        value="56"
                        percentage={15.3}
                        isPositive={true}
                        />
                    <StatCard
                        className="TE"
                        title="Employee"
                        value="41"
                        percentage={45}
                        isPositive={true}
                    />
                    </div>
                </div>
                <div className="box box3"></div>
                <div className="box box4"></div>
                <div className="box box5"><Piechart /></div>
            </div>
        </div>
    );
}

export default Dashboard;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import sourceData from "../../Data/sourceData.json";
const piechart = () => {
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <div style={{height:"100%" ,width:"100%"}}>
                <Pie
                    data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Revenue",
                                data: sourceData.map((data) => data.Revenue),
                                backgroundColor: [
                                    "#5c8d89",
                                    "#74b49b",
                                    "#a7d7c5",
                                ],
                            },
                            {
                                label: "Loss",
                                data: sourceData.map((data) => data.Loss),
                                backgroundColor: [
                                    "#828282",
                                    "#f2f2f2",
                                    "#f4f9f4",
                                ]
                            },
                        ],
                    }}
                    options={options}
                />
            </div>
        </>
    )
}
export default piechart
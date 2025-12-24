import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import sourceData from "../../Data/sourceData.json";

const Barchart = () => {
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{height:"100%" ,width:"100%"}}>
            <Bar
                data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Revenue",
                            data: sourceData.map((data) => data.Revenue),
                            backgroundColor: [
                                "#5c8d89",
                                "#5c8d89",
                                "#5c8d89",
                            ],
                            borderRadius: 5,
                        },
                        {
                            label: "Loss",
                            data: sourceData.map((data) => data.Loss),
                            backgroundColor: [
                                "#a7d7c5",
                                "#a7d7c5",
                                "#a7d7c5",
                            ],
                            borderRadius: 5,
                        },
                    ],
                }}
                options={options}
            />
        </div>
    );
}

export default Barchart;
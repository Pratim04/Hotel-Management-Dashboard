import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import sourceData from "../../Data/sourceData.json";
function Linechart() {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <div style={{height:"100%" ,width:"100%"}}>
                <Line
                    data = {{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Revenue",
                                data: sourceData.map((data) => data.Revenue),
                                backgroundColor: "#e5e5e5",
                                borderColor: "#5c8d89",
                            },
                            {
                                label: "Loss",
                                data: sourceData.map((data) => data.Loss), 
                                backgroundColor: "#5c8d89",
                                borderColor: "#a7d7c5",
                            },
                        ],
                    }}
                    options={options}
                />
            </div>
        </>
    )
}

export default Linechart

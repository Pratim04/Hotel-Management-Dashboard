import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import sourceData from "../../Data/sourceData.json";

function Doughnutchart() {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <div style={{height:"100%" ,width:"100%"}}>
                <Doughnut
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
                                ]
                            },
                            {
                                label: "Loss",
                                data: sourceData.map((data) => data.Loss),
                                backgroundColor: [
                                    "#004300ff",
                                    "#828282",
                                    "#59c500ff",
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

export default Doughnutchart

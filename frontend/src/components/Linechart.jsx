import React from 'react'
import { Line } from 'react-chartjs-2';
function Linechart() {
    return (
        <>
            <div className="h-60 w-100 rounded-xl shadow-lg bg-white dataCard m-2 p-2 customerCard">
                <Line
                    data={{
                        labels: ["A", "B", "C", "D", "E", "F"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [200, 300, 365, 35, 143, 83],
                            },
                            {
                                label: "Loss",
                                data: [90, 80, 70, 12, 37, 53],
                            },
                        ],
                    }}
                />
            </div>
        </>
    )
}

export default Linechart

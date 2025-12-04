import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from 'react-chartjs-2'

const piechart = () => {
    return (
        <>
            <div className="h-60 w-100 rounded-xl shadow-lg bg-white dataCard m-2 p-2 customerCard">
                <Pie
                    data={{
                        labels: ["A", "B", "C"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [200, 300, 365],
                            },
                            {
                                label: "Loss",
                                data: [90, 80, 70],
                            },
                        ],
                    }}
                />
            </div>
        </>
    )
}
export default piechart
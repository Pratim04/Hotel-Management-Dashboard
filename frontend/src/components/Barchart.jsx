import React from 'react';
import sourceData from "../Data/sourceData.json";
import { ResponsiveContainer ,Barchart ,Bar, XAxis, YAxis} from 'recharts';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

const BarChart = () => {
    return (
        <>
            <ResponsiveContainer width= "50%" aspect={3}>
                <Barchart data = {sourceData} width = {400} height = {400}>
                    <XAxis dataKey="iteam"/>
                    <YAxis />
                    <Bar dataKey="price"/>
                </Barchart>
            </ResponsiveContainer>
        </>
    );
}

export default BarChart;
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const RadialBarChartComponent = () => {

    const data = [
        {
        name: "18-24",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8"
        },
        {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed"
        },
        {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1"
        },
        
    ];
    
    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
    };
    
    return (
        <RadialBarChart
        width={500}
        height={300}
        cx={110}
        cy={110}
        innerRadius={40}
        outerRadius={110}
        barSize={8}
        data={data}
        >
        <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
        />
        <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
        />
        </RadialBarChart>
    );
};

export default RadialBarChartComponent;
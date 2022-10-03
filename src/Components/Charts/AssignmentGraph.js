import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const AssignmentGraph = () => {
    const data = [
        {
    name: "Assignment one",
    Marks: 4000,
    quiz: 2400,
    amt: 2400
  },
  {
    name: "Assignment two",
    Marks: 3000,
   quiz: 1398,
    amt: 2210
  },
  {
    name: "Assignment three",
    Marks: 2000,
   quiz: 9800,
    amt: 2290
  },
  {
    name: "Assignment four",
    Marks: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Assignment five",
    Marks: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Assignment six",
    Marks: 2390,
   quiz: 3800,
    amt: 2500
  },
  {
    name: "Assignment seven",
    Marks: 3490,
   quiz: 4300,
    amt: 2100
  }
    ]
    return (
        <div className='md:flex justify-center py-8 bg-green-300 text-red-800'>
            <LineChart width={500} height={400} data = {data}> 
            <Line type="monotone" dataKey="Marks" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
            
        </div>
    );
};

export default AssignmentGraph;
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Graph2 = (props) => {

  //This is how we're receiving the data from the App.js into this page
  const xy_here = props.xys;

  const data = []; // Creating a Empty Array

  xy_here.map((xys, i) => {
    // Pushing the data into the Empty Array
    data.push(
      {
        name : `Pt.${i}`,
        sin : xys.x,
        cos : xys.y
      }
    )
    // console.log(data);
    return data;
  })
    

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sin" fill="#8884d8" />
          <Bar dataKey="cos" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

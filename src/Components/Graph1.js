import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Graph1 = (props) => {
  
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
      {/* {xy_here.map((xys, i) => {
        console.log(typeof(parseInt(xys.x)))
        return <h5 key={i}>{xys.x}</h5>;
        
      })} */}
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
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
          <Legend />  {/* This are displayed below the graph which shows the color of the axis */}
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8"  /> */}
          <Line type="monotone" dataKey="sin" stroke="#8884d8" activeDot={{r:1}}/>
          <Line type="monotone" dataKey="cos" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

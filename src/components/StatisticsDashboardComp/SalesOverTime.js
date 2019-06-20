import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Page A',  pv: 2400, amt: 2400,
  },
  {
    name: 'Page B',  pv: 1398, amt: 2210,
  },
  {
    name: 'Page C',  pv: 9800, amt: 2290,
  },
  {
    name: 'Page D',  pv: 3908, amt: 2000,
  },
  {
    name: 'Page E',  pv: 4800, amt: 2181,
  },
  {
    name: 'Page F',  pv: 3800, amt: 2500,
  },
  {
    name: 'Page G',  pv: 4300, amt: 2100,
  },
];

export default class SalesOverTime extends PureComponent {
  

  render() {
    return (
      <LineChart
        width={610}
        height={300}
        data={data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

import './Chart.css';
import React from 'react';
import { LineChart, Line } from 'recharts';

export default function Chart({ data }) {
  return (
    <LineChart width={315} height={70} data={data} className='chart'>
      <Line
        type='monotone'
        dataKey='temperature'
        stroke='blue'
        strokeWidth={4}
        className='charts__line'
      />
    </LineChart>
  );
}

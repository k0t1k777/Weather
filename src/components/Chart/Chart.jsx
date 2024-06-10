import './Chart.css';
import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
  {
    name: 'Page D',
    pv: 3908,
  },
  {
    name: 'Page W',
    pv: 4800,
  },
  {
    name: 'Page X',
    pv: 4800,
  },
  {
    name: 'Page N',
    pv: 4800,
  },
];

export default function Chart() {

  return (
      <LineChart width={315} height={70} data={data} className='chart'>
        <Line type="monotone" dataKey="pv" stroke="red" strokeWidth={2} />
      </LineChart>
  );
}

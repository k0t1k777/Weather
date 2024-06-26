import './Chart.css';
import { useSelector } from 'react-redux';
import { LineChart, Line } from 'recharts';

export default function Chart() {
  const chartData = useSelector((state) => state.weather.chartData);

  return (
    <LineChart width={296} height={70} data={chartData} className='chart'>
      <defs>
        <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor='#8884d8' stopOpacity={0.8} />
          <stop offset='100%' stopColor='#8884d8' stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <Line
        type='monotone'
        dataKey='temperature'
        stroke='url(#gradient)'
        strokeWidth={4}
        className='charts__line'
      />
    </LineChart>
  );
}

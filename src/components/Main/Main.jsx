import './Main.css';
import MainPicture from './../../assets/Image1.png';
import Chart from '../Chart/Chart';

export default function Main() {
  return (
    <div className='main'>
      <div className='main__container-city'>
        <p className='main__city'>San Fransisco</p>
        <p className='main__time'>11:00</p>
      </div>

      <div>
        <img className='main__image' src={MainPicture} alt='Иконка картинки' />
        <p className="main__weather">thunderstorm</p>
        <p className="main__degress">24</p>
      </div>
      <Chart />
    </div>
  );
}

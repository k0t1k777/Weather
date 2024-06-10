import './ContainerDays.css';
import DaysImage from './../../../assets/sunny.png';

export default function ContainerDays() {
  return (
    <div className='days'>
      <div className='days__containers'>
        <p className='days__item'>9AM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>9AM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__shadow'></div>

      <div className='days__containers days__containers_type_shadow'>
        <p className='days__item'>9AM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>9AM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
      <div className='days__containers'>
        <p className='days__item'>9AM</p>
        <img src={DaysImage} alt='иконка картинки' className='days__image' />
        <p className='days__degress'>18°</p>
      </div>
    </div>
  );
}

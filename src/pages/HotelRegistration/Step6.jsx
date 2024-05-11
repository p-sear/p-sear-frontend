import hotelFin from '../../assets/icons/hotel_fin.png';
import './Step6.css';

const Step6 = () => {
  return (
    <div className='step6-container flex flex-col items-center justify-center'>
      <h1>등록 완료</h1>
      <img src={hotelFin} alt='' />
    </div>
  );
};

export default Step6;

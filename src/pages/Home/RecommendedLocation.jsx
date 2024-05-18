import { IoIosArrowForward } from 'react-icons/io';

import LocationData from './LocationData';
import './RecommendedLocation.css';

const RecommendedLocation = () => {
  return (
    <div className='recLocation-container'>
      <div className='recLocation-title flex items-center justify-between'>
        <h1>추천 여행지</h1>
        <a href='' className='flex items-center justify-center'>
          더보기{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </a>
      </div>
      <LocationData size='5'></LocationData>
    </div>
  );
};
export default RecommendedLocation;

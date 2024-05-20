import { useNavigate } from 'react-router-dom';

import busanImg from '../../assets/images/busan.png';
import chungbukImg from '../../assets/images/chungbuk.png';
import chungnamImg from '../../assets/images/chungnam.png';
import daeguImg from '../../assets/images/daegu.png';
import daejeonImg from '../../assets/images/daejeon.png';
import gangwonImg from '../../assets/images/gangwon.png';
import gyeongbukImg from '../../assets/images/gyeongbuk.png';
import gyeongiImg from '../../assets/images/gyeongi.png';
import gyeongnamImg from '../../assets/images/gyeongnam.png';
import gyeongjuImg from '../../assets/images/gyeonju.png';
import incheonImg from '../../assets/images/incheon.png';
import jejuImg from '../../assets/images/jeju.png';
import jeonbukImg from '../../assets/images/jeonbuk.png';
import jeonnamImg from '../../assets/images/jeonnam.png';
import seoulImg from '../../assets/images/seoul.png';
import ulsanImg from '../../assets/images/ulsan.png';
import './LocationData.css';

let recommendData = [
  {
    location: '서울',
    image: seoulImg,
  },
  {
    location: '제주',
    image: jejuImg,
  },
  {
    location: '대전',
    image: daejeonImg,
  },
  {
    location: '대구',
    image: daeguImg,
  },
  {
    location: '부산',
    image: busanImg,
  },
  {
    location: '인천',
    image: incheonImg,
  },
  {
    location: '경주',
    image: gyeongjuImg,
  },
  {
    location: '울산',
    image: ulsanImg,
  },
  {
    location: '전북',
    image: jeonbukImg,
  },
  {
    location: '전남',
    image: jeonnamImg,
  },
  {
    location: '경북',
    image: gyeongbukImg,
  },
  {
    location: '경남',
    image: gyeongnamImg,
  },
  {
    location: '충북',
    image: chungbukImg,
  },
  {
    location: '충남',
    image: chungnamImg,
  },
  {
    location: '강원',
    image: gangwonImg,
  },
  {
    location: '경기',
    image: gyeongiImg,
  },
];
const getRandomRecommendations = (data, size) => {
  console.log(size);
  console.log(data);
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  console.log(data);
  return data.slice(0, size);
};
const LocationData = props => {
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const displayData = getRandomRecommendations(recommendData, props.size);

  const onSearch = location => {
    console.log('클릭');
    navigate(`/myapp?keyword=${location}&page=1`);
  };
  return (
    <div className='recLocation-content flex flex-row'>
      {displayData.map((item, index) => (
        <button key={index} onClick={() => onSearch(item.location)}>
          <div>
            <img src={item.image} alt='' />
            <p>{item.location}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default LocationData;

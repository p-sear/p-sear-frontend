/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import axios from 'axios';

const { kakao } = window;

const KaKaoMap = ({ onHotelDataLoaded }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/hotel.json',
        );
        setData(response.data.body);
        onHotelDataLoaded(response.data.body);
      } catch (error) {
        console.error('객실 리스트 오류', error);
      }
    };
    fetchData();
  }, []); // 의존성 배열 비워둠

  useEffect(() => {
    if (data.length === 0) return;

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(
        parseFloat(data[0].latitude),
        parseFloat(data[0].longtitude),
      ),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    data.forEach(item => {
      const markerPosition = new kakao.maps.LatLng(
        parseFloat(item.latitude),
        parseFloat(item.longtitude),
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    });
  }, [data]); // 데이터 의존성 배열로 추가

  return (
    <div className='h-60 w-72'>
      <div
        id='map'
        style={{ width: '100%', height: '100%' }}
        className='rounded-lg'
      ></div>
    </div>
  );
};

export default KaKaoMap;

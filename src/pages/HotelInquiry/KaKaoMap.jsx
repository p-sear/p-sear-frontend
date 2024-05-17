import { useEffect } from 'react';

const { kakao } = window;

const KaKaoMap = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.55605010732486, 127.00496835047365),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.55605010732486,
      127.00496835047365,
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div className='h-64 w-64'>
      <div
        id='map'
        style={{ width: '100%', height: '100%' }}
        className='rounded-lg'
      ></div>
    </div>
  );
};

export default KaKaoMap;

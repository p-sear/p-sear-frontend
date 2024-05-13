import { useEffect } from 'react';

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.55605010732486, 127.00496835047365),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(
      37.55605010732486,
      127.00496835047365,
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    map.relayout();
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '500px', height: '500px' }}></div>
    </div>
  );
};

export default KakaoMap;

import { useEffect, useState } from 'react';

import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import axios from 'axios';

const AuctionRoom = () => {
  const [roomData, setRoomData] = useState([]);
  const [roomAmenities, setRoomAmenities] = useState([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const roomResponse = await axios.get(
          'http://localhost:5173/dummy/auctionRoom.json',
        );
        setRoomData(roomResponse.data.body);

        const amenityResponse = await axios.get(
          'http://localhost:5173/dummy/auctionRoomAmenity.json',
        );
        setRoomAmenities(amenityResponse.data.body.content);
      } catch (error) {
        console.error('데이터 가져오기 오류', error);
      }
    };

    fetchRoomData();
  }, []);

  return (
    <div className='flex '>
      {roomData.map(room => {
        const amenities = roomAmenities.find(
          amenity => amenity.roomId === room.roomId,
        );

        return (
          <Card key={room.roomId} className='mb-4 bg-white p-6 shadow-md'>
            <CardBody className='text-center'>
              <h2 className='text-xl font-bold'>{room.name}</h2>
              <p>{room.description}</p>
              <div className='mt-4 flex flex-wrap justify-center'>
                {amenities?.heatingSystem && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    난방
                  </span>
                )}
                {amenities?.tv && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>TV</span>
                )}
                {amenities?.refrigerator && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    냉장고
                  </span>
                )}
                {amenities?.airConditioner && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    에어컨
                  </span>
                )}
                {amenities?.washer && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    스타일러
                  </span>
                )}
                {amenities?.terrace && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    테라스
                  </span>
                )}
                {amenities?.coffeeMachine && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    커피머신
                  </span>
                )}
                {amenities?.internet && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    인터넷
                  </span>
                )}
                {amenities?.kitchen && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    주방
                  </span>
                )}
                {amenities?.bathub && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    욕조
                  </span>
                )}
                {amenities?.iron && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    다리미
                  </span>
                )}
                {amenities?.pool && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    개인풀
                  </span>
                )}
                {amenities?.inAnnex && (
                  <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                    별관위치
                  </span>
                )}
              </div>
            </CardBody>
            <CardFooter className='flex items-center justify-between'></CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default AuctionRoom;

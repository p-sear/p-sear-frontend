import { useEffect, useState } from 'react';

import { Card, CardBody, Carousel } from '@material-tailwind/react';
import axios from 'axios';

const AuctionRoom = () => {
  const [roomData, setRoomData] = useState([]);
  const [roomAmenities, setRoomAmenities] = useState([]);
  const [roomImages, setRoomImages] = useState([]);

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

        const roomImagesResponse = await axios.get(
          'http://localhost:5173/dummy/auctionRoomImage.json',
        );
        setRoomImages(roomImagesResponse.data.body);
      } catch (error) {
        console.error('데이터 가져오기 오류', error);
      }
    };

    fetchRoomData();
  }, []);

  return (
    <div className='m-4 flex w-2/3 flex-wrap'>
      {roomData.map(room => {
        const amenities = roomAmenities.find(
          amenity => amenity.roomId === room.roomId,
        );

        const images =
          roomImages.find(image => image.roomId === room.roomId)?.imagelink ||
          [];

        return (
          <Card
            key={room.roomId}
            className='mb-4 w-full bg-white p-6 shadow-md'
          >
            <CardBody className='text-center '>
              <div>
                {images.length > 0 && (
                  <Carousel
                    loop={true}
                    autoplay={true}
                    autoplayDelay={5000}
                    className='rounded-xl'
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                      <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
                        {new Array(length).fill('').map((_, i) => (
                          <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i
                                ? 'w-8 bg-white'
                                : 'w-4 bg-white/50'
                            }`}
                            onClick={() => setActiveIndex(i)}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-center'
                      >
                        <img
                          src={image}
                          className='h-auto w-full max-w-md rounded-xl object-cover object-center shadow-md'
                          alt={`gallery-image-${index}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
                <h2 className='mt-4 text-xl font-bold'>{room.name}</h2>
                <p>{room.description}</p>
                <div className='mt-4 flex flex-wrap justify-center'>
                  {amenities?.heatingSystem && (
                    <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                      난방
                    </span>
                  )}
                  {amenities?.tv && (
                    <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                      TV
                    </span>
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
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default AuctionRoom;

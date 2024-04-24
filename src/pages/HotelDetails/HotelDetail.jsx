import React from 'react';
import HotelImage from './hotelImage';
import { Typography ,Button } from '@material-tailwind/react';
import KaKaoMap from '../HotelInquiry/KaKaoMap';
import DateSelector from '../../components/Calendar/DateSelector';
import PeopleSelector from '../../components/PeopleSelector/PeopleSelector';
import RoomCard from './roomcard';

const HotelDetail = () => {
    const roomData = [
        {
            id: "디럭스 트윈",
            name: "디럭스 트윈",
            description: "침대 두개.",
            imageUrl: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp"
        },
        {
            id: "디럭스 트윈",
            name: "디럭스 트윈",
            description: "침대 두개.",
            imageUrl: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp"
        },
        {
            id: "디럭스 트윈",
            name: "디럭스 트윈",
            description: "침대 두개.",
            imageUrl: "https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp"
        },
    ]

    return (
        <div className='max-w-8xl'>
            <div className='bg-blue-gray-50'>
                <HotelImage />
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center '>
            <div>
                <Typography variant="h6" color="black" className=" bg-blue-gray-50">Black.5성급.호텔</Typography>
                <Typography variant="h3" color="black" className=" bg-blue-gray-50">히든 클리프 호텔&네이쳐</Typography>
                <Typography variant="h5" color="black" className="">서비스 및 부대시설</Typography>
                <Typography variant="h6" color="black" className="">🛁욕실 🚽화장실 🚿샤워실 🛏침대 ♨스파 </Typography>
                <Typography variant='h4' color='black' className="">숙소 소개</Typography>
                <Typography variant='h6' color='black'>
                    "전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에 여유와 품격을 한층 높여 주는 프리미엄 라이프스타일 공간으로 변화를 거듭해 오는 세계 최고의 럭셔리 호텔입니다"
                </Typography>
            </div>

            <div>
                <div className="flex flex-col">
                    <div className="flex rounded-xl overflow-hidden m-4">
                        <KaKaoMap />
                    </div>
                    <div className="flex-col mt-4 z-30">
                        <DateSelector />
                        <PeopleSelector />
                    </div>

                    <Button color="blue" className='m-10'>예약하기</Button>
                </div>
            </div>
            </div>
            
            <div className="w-full lg:w-2/3 mx-auto flex flex-col items-center mb-8">
                {roomData.map((room) => (
                    <RoomCard
                        key={room.id}
                        id={room.id}
                        name={room.name}
                        description={room.description}
                        imageUrl={room.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default HotelDetail;

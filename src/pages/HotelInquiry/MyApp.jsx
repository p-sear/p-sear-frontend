import React from 'react';
import KaKaoMap from './KaKaoMap';
import HotelCard from './HotelCard';
import CheckBox3 from './CheckBox3';
import CheckBox2 from './CheckBox2';
import FooterWithSocialLinks from './FooterWithSocialLinks';

const MyApp = () => {

    const hotelData = [
        {
            id: "블랙.5성급.호텔",
            name: "서울신라호텔",
            description: "서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.",
            imageUrl: "https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp"
        },
        {
            id: "블랙.5성급.호텔",
            name: "서울신라호텔2",
            description: "서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.",
            imageUrl: "https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp"
        },
        {
            id: "블랙.5성급.호텔",
            name: "서울신라호텔3",
            description: "서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.",
            imageUrl: "https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp"
        },
        {
            id: "블랙.5성급.호텔",
            name: "서울신라호텔4",
            description: "서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.",
            imageUrl: "https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp"
        },
        
    ];




    return (
        <div className="flex justify-center  ">
            <div className="flex-1 bg-blue-50 p-8">
                <h1 className="text-center"></h1>
                
                <div className="max-w-auto flex justify-center space-x-8 mb-8  ">
                    <CheckBox2 id ="a"/>
                    <div className="rounded-xl overflow-hidden ml-4">
                        <KaKaoMap />
                    </div>
                </div>
                <div className="flex flex-col items-center mb-8  ">
                    {hotelData.map((hotel) => (
                        <HotelCard
                            id={hotel.id}
                            name={hotel.name}
                            description={hotel.description}
                            imageUrl={hotel.imageUrl}
                        />
                    ))}
               
                </div>
               
                <FooterWithSocialLinks></FooterWithSocialLinks>
            </div>
            
        </div>
        
    );
};

export default MyApp;

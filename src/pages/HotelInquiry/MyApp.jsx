import React from 'react';
import KaKaoMap from './KaKaoMap';
import HotelCard from './HotelCard';
import CheckBox3 from './CheckBox3';
import FooterWithSocialLinks from './FooterWithSocialLinks';

const MyApp = () => {
    return (
        <div className="flex justify-center">
            <div className="flex-1 bg-blue-50 p-8">
                <h1 className="text-center"></h1>
                <div className="flex justify-center space-x-8 mb-8">
                    <CheckBox3 id ="a"/>
                    <div className="rounded-xl overflow-hidden ml-4">
                        <KaKaoMap />
                    </div>
                </div>
                <div className="flex justify-center space-x-8 mb-8">
                    <HotelCard />
                   
                </div>
                <div className="flex justify-center space-x-8 mb-8">
                    <HotelCard />
                    
                </div>
                <div className="flex justify-center space-x-8 mb-8">
                    <HotelCard />
                    
                </div>
                 <div className="flex justify-center space-x-8 mb-8">
                    <HotelCard />
                    
                </div>
                <FooterWithSocialLinks></FooterWithSocialLinks>
            </div>
            
        </div>
        
    );
};

export default MyApp;

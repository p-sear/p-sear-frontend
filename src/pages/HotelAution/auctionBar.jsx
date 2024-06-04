/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useEffect } from 'react';

import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import axios from 'axios';

const AuctionBar = () => {
  const [inputPrice, setInputPrice] = useState('');
  const [auctionData, setAuctionData] = useState([]);
  const [latestAuction, setLatestAuction] = useState({ date: '', price: '' });
  const handleInputPriceChange = e => {
    const input = e.target.value;
    const isNumber = /^[0-9]*$/;
    if (isNumber.test(input) || input === '') {
      setInputPrice(input);
    }
  };

  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/auctionData.json',
        );
        setAuctionData(response.data.body);
        if (response.data.body.length > 0) {
          const latest = response.data.body[response.data.body.length - 1];
          setLatestAuction({ date: latest.date, price: latest.price });
        }
      } catch (error) {
        console.error('경매 데이터 오류', error);
      }
    };

    fetchAuctionData();
  });
  return (
    <div className='m-4 flex justify-between'>
      <Card className=' flex   shadow-md'>
        <div className='m-3 flex flex-col'>
          <Typography variant='h4' color='blue' className='m-1 text-center'>
            입찰하기
          </Typography>

          <Typography variant='h6' className=''>
            남은시간
          </Typography>
          <div className='mb-2 flex justify-between '>
            <Typography variant='h6'>시작가격</Typography>
            <Typography variant='h6'>35,000원</Typography>
          </div>
          <Typography variant='h6' className='text-center'>
            현재 최고 입찰가
          </Typography>
          <Typography variant='h5' color='red' className='text-center'>
            {latestAuction.price}
          </Typography>
          <Typography variant='h6' className='text-center'>
            즉시 입찰가
          </Typography>
          <Typography variant='h5' color='red' className='text-center'>
            75,000원
          </Typography>
          <Typography variant='h6' className='text-center'>
            입찰가
          </Typography>

          <div className=' m-2 flex justify-center'>
            <Input
              label='금액 입력'
              value={inputPrice}
              onChange={handleInputPriceChange}
            ></Input>
          </div>

          <div className=' m-2 flex justify-center'>
            <Button className='m-1' color='blue'>
              입찰하기
            </Button>
            <Button className='m-1' color='red'>
              즉시입찰
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuctionBar;

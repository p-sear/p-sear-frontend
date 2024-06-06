import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import axios from 'axios';

const Auction = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = value => setOpen(open === value ? 0 : value);
  const [auctionData, setAuctionData] = useState([]);
  const [latestAuction, setLatestAuction] = useState({ date: '', price: '' });
  const [inputPrice, setInputPrice] = useState('');

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
  const handleInputPriceChange = e => {
    const input = e.target.value;
    const isNumber = /^[0-9]*$/;
    if (isNumber.test(input) || input === '') {
      setInputPrice(input);
    }
  };

  console.log(inputPrice);
  return (
    <div>
      <div className='flex justify-center'>
        <Accordion
          open={open === 0}
          className=' m-4 w-2/3 rounded-lg bg-gray-50 px-4 shadow-md'
        >
          <AccordionHeader className='flex justify-between'>
            <Typography variant='h5' className='ml-8 mr-8'>
              남은시간 : 72 : 00 : 00
            </Typography>

            <Typography variant='h5' className='mr-4'>
              {latestAuction.date} {latestAuction.price}
            </Typography>

            <div className='mr-8 w-2/12'>
              <Input
                label='금액 입력'
                value={inputPrice}
                onChange={handleInputPriceChange}
              ></Input>
            </div>

            <Button color='blue'>입찰</Button>
            <div className='justify-end'>
              <Button color='blue' onClick={() => handleOpen(1)}>
                더보기
              </Button>
            </div>
          </AccordionHeader>

          {auctionData.map(data => (
            <AccordionBody className='' key={data.price}>
              <Typography variant='h5' className='float-left'>
                {data.date}
              </Typography>
              <Typography variant='h5' className='text-right'>
                {data.price}
              </Typography>
            </AccordionBody>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Auction;

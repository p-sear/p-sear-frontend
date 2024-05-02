import React from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

const data = [
  {
    date: '24/04/30/12:00',
    price: '74,000원',
  },
  {
    date: '24/04/30/12:00',
    price: '72,000원',
  },
  {
    date: '24/04/30/12:00',
    price: '70,000원',
  },
];

const Auction = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = value => setOpen(open === value ? 0 : value);
  return (
    <div className='flex justify-center'>
      <Accordion
        open={open === 0}
        className=' m-4 w-2/3 rounded-lg border border-blue-gray-100 bg-blue-50 px-4'
      >
        <AccordionHeader className='flex justify-between'>
          <Typography variant='h5' className='ml-8 mr-8'>
            남은시간 : 72 : 00 : 00
          </Typography>

          <Typography variant='h5' className='mr-4'>
            24/04/30/13:00 80,000원
          </Typography>

          <div className='mr-8 w-2/12'>
            <Input label='금액 입력'></Input>
          </div>

          <Button color='blue'>입찰</Button>
          <div className='justify-end'>
            <Button color='blue' onClick={() => handleOpen(1)}>
              더보기
            </Button>
          </div>
        </AccordionHeader>

        {data.map(data => (
          <AccordionBody className=''>
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
  );
};

export default Auction;

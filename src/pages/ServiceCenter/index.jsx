import React from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
}

const ServiceCenter = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = value => setOpen(open === value ? 0 : value);
  const data = [
    {
      title: '경매는 어떤 식으로 진행하나요 ? (1)',
      content: '이렇게 진행합니다.',
    },
    {
      title: '경매는 어떤 식으로 진행하나요 ? (2)',
      content: '이렇게 진행합니다.',
    },
    {
      title: '경매는 어떤 식으로 진행하나요 ? (3)',
      content: '이렇게 진행합니다.',
    },
    {
      title: '경매는 어떤 식으로 진행하나요 ? (4)',
      content: '이렇게 진행합니다.',
    },
  ];
  return (
    <>
      <div className='container mx-auto py-10'>
        <div className='ml-3 text-3xl'>고객 센터</div>
      </div>
      <div className='container mx-auto'>
        <div className='w-100 rounded-lg bg-gray-300 p-8'>
          <div className='mb-4 text-xl'>
            <i className='fas fa-phone fa-rotate-90 fa-sm'></i>{' '}
            <span className='ml-5'>0000 - 0000</span>
          </div>
          <div className='text-sm text-gray-600'>환불, 취소, 경매 문의</div>
          <div className='text-sm text-gray-600'>9시 ~ 18시</div>
        </div>
        <div className='mb-16 mt-10 flex justify-center rounded-lg bg-yellow-400 py-5'>
          카카오톡으로 문의하기
        </div>
        <div className='pb-20'>
          <div className='mb-5 ml-3 text-xl'>자주 묻는 질문</div>
          {data.map((item, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                style={{ fontFamily: 'SUITE-Regular' }}
                className='text-md font-normal text-black'
              >
                Q {item.title}
              </AccordionHeader>
              <AccordionBody style={{ fontFamily: 'SUITE-Regular' }}>
                {item.content}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCenter;

import { Card, Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

import { router } from '../../router';

const HotelReservation = () => {
  const handleButtonClick = () => {
    router.navigate('/hotel-reservation2');
  };

  const TABLE_COLUMNS = [
    {
      label: '숙소',
      dataKey: 'name',
    },
    {
      label: '객실',
      dataKey: 'room',
    },
    {
      label: '일정',
      dataKey: 'date',
    },
    {
      label: '결제 금액',
      dataKey: 'price',
    },
  ];

  const TABLE_ROWS = [
    {
      name: '서울신라호텔',
      room: 'standard',
      date: '24/4/29 15:00 ~ 24/4/30 10:00',
      price: '150,000 원',
    },
  ];

  return (
    <div>
      <Typography
        variant='h1'
        color='blue'
        textGradient
        className='m-4 text-center '
      >
        예약확인
      </Typography>
      <Typography variant='h4' color='blue' className='m-2 text-center '>
        객실이 맞나요?
      </Typography>

      <div className='flex justify-center'>
        <img
          src='https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp'
          className='m-4 w-1/3 rounded-xl '
        ></img>
      </div>

      <div className='flex justify-center'>
        <Card className='m-4  h-2/4 w-1/3  overflow-scroll bg-blue-50'>
          <table className='w-full min-w-max table-auto text-center'>
            {' '}
            <tbody>
              {TABLE_COLUMNS.map(({ label, dataKey }) => (
                <tr key={label}>
                  <td className='p-4'>
                    <Typography
                      variant='text'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {label}
                    </Typography>
                  </td>
                  {TABLE_ROWS.map((row, index) => (
                    <td
                      key={index}
                      className='border-b border-blue-gray-50 p-4'
                    >
                      <Typography
                        variant='text'
                        color='black'
                        className='font-normal'
                      >
                        {row[dataKey]}
                      </Typography>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <div className='flex justify-center'>
        <Button
          variant='text'
          className='m-4 flex items-center gap-2 bg-blue-100'
          onClick={handleButtonClick}
        >
          네, 맞아요{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default HotelReservation;

import { useEffect, useState } from 'react';

import { Card, Typography } from '@material-tailwind/react';
import { Button, Option, Select } from '@material-tailwind/react';
import { useLocation } from 'react-router-dom';

import { router } from '../../router';

const HotelReservation = () => {
  const location = useLocation();
  const hotelName = location.state?.hotelName;
  const roomData = location.state?.roomData || [];
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    if (selectedRoom) {
      const newTableRows = [
        {
          name: hotelName,
          room: selectedRoom?.name,
          date: `${selectedRoom?.checkIn} ~ ${selectedRoom?.checkOut}`,
          price: `${selectedRoom?.price}`,
        },
      ];
      setTableRows(newTableRows);
    } else {
      setTableRows([]);
    }
  }, [selectedRoom, hotelName]);

  const handleRoomChange = roomName => {
    const room = roomData.find(r => r.name === roomName);
    setSelectedRoom(room);
  };

  const handleButtonClick = () => {
    router.navigate('/hotel-reservation2');
  };

  const TABLE_COLUMNS = [
    { label: '숙소', dataKey: 'name' },
    { label: '객실', dataKey: 'room' },
    { label: '일정', dataKey: 'date' },
    { label: '결제 금액', dataKey: 'price' },
  ];

  return (
    <div>
      <Typography
        variant='h1'
        color='blue'
        textGradient
        className='m-4 text-center'
      >
        예약확인
      </Typography>
      <Typography variant='h4' color='blue' className='m-2 text-center'>
        객실이 맞나요?
      </Typography>

      <div className='flex flex-col items-center justify-center'>
        <img
          src={selectedRoom?.imageUrl}
          className='m-4 w-1/3 rounded-xl'
          alt='객실 이미지'
        />

        <div className='mb-4 w-1/3'>
          {roomData.length > 0 ? (
            <Select
              label='객실 선택'
              onChange={roomName => handleRoomChange(roomName)}
              value={selectedRoom?.name || ''}
            >
              {roomData.map(room => (
                <Option key={room.roomId} value={room.name}>
                  {room.name}
                </Option>
              ))}
            </Select>
          ) : (
            <Typography variant='body1' className='text-center'>
              선택 가능한 객실이 없습니다.
            </Typography>
          )}
        </div>
      </div>

      <div className='flex justify-center'>
        <Card className='m-4  h-2/4 w-1/3  overflow-scroll bg-gray-50 shadow-md'>
          <table className='w-full min-w-max table-auto text-center'>
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
                  <td className='border-b border-blue-gray-50 p-4'>
                    <Typography
                      variant='text'
                      color='black'
                      className='font-normal'
                    >
                      {tableRows.length > 0 && tableRows[0][dataKey]}
                    </Typography>
                  </td>
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
          disabled={!selectedRoom}
        >
          네, 맞아요
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

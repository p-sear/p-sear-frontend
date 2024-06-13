import { useEffect, useState } from 'react';

import RangeSlider from '../../components/Modal/RangeSlider';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';

// eslint-disable-next-line react/prop-types
const ListFilter = ({ dateRange, onFilterChange, peopleCount }) => {
  const [selected, setSelected] = useState([]);
  const [selectedPublicServices, setSelectedPublicServices] = useState([]);
  const [selectedRoomServices, setSelectedRoomServices] = useState([]);

  useEffect(() => {
    if (dateRange) {
      // 날짜가 초기 설정된 경우 다른 로직을 실행할 수 있음
    }
  }, [dateRange]);

  const hotelCategory = [
    '전체',
    '호텔',
    '모텔',
    '리조트',
    '펜션',
    '캠핑/글램핑',
    '게스트하우스',
    '한옥',
    '풀빌라',
    '단독 주택',
  ];

  const handleSelect = category => {
    const newSelected =
      category === '전체'
        ? selected.includes('전체') ||
          selected.length === hotelCategory.length - 1
          ? []
          : [...hotelCategory]
        : selected.includes(category)
          ? selected.filter(item => item !== category)
          : [...selected, category];

    setSelected(newSelected);
    onFilterChange({
      selected: newSelected,
      selectedPublicServices,
      selectedRoomServices,
    });
  };

  const publicServices = [
    '주차',
    '조식',
    '와이파이',
    '흡연 구역',
    '건조기',
    '루프탑',
    '24시간 데스크',
    '짐 보관',
    '매점',
    '반려견 동반',
    '레스토랑',
    '피트니스',
    '사우나',
    '수영장',
    'BBQ',
  ];

  const handleSelectPublicService = service => {
    const newSelectedPublicServices = selectedPublicServices.includes(service)
      ? selectedPublicServices.filter(f => f !== service)
      : [...selectedPublicServices, service];

    setSelectedPublicServices(newSelectedPublicServices);
    onFilterChange({
      selected,
      selectedPublicServices: newSelectedPublicServices,
      selectedRoomServices,
    });
  };

  const roomServices = [
    'TV',
    '와이파이',
    'PC',
    'OTT',
    '금연',
    '흡연 가능',
    '객실 스파',
    '미니바',
    '에어컨',
    '욕실 용품',
    '객실 내 취사',
    '반려견 동반',
  ];

  const handleSelectRoomService = service => {
    const newSelectedRoomServices = selectedRoomServices.includes(service)
      ? selectedRoomServices.filter(f => f !== service)
      : [...selectedRoomServices, service];

    setSelectedRoomServices(newSelectedRoomServices);
    onFilterChange({
      selected,
      selectedPublicServices,
      selectedRoomServices: newSelectedRoomServices,
    });
  };

  return (
    <div className='rounded-lg p-4 shadow-md'>
      <div className='m-2'>
        <DateSelector initialRange={dateRange}></DateSelector>
        <PeopleSelector initialCount={peopleCount} />
      </div>
      <h1 className='mb-2 text-lg font-bold'>필터</h1>
      <div className='mb-4'>
        <h3 className='text-base font-semibold'>숙소 유형</h3>
        <ul>
          {hotelCategory.map((category, index) => (
            <li
              key={index}
              className={`flex cursor-pointer items-center space-x-2 ${selected.includes(category) ? 'text-blue-500' : ''}`}
              onClick={() => handleSelect(category)}
            >
              <div
                className={`h-4 w-4 rounded-full border border-gray-300 ${selected.includes(category) ? 'bg-blue-500' : 'bg-white'}`}
              ></div>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-4'>
        <h3 className='text-base font-semibold'>가격</h3>
        <RangeSlider />
      </div>

      <div className='mb-4'>
        <h3 className='text-base font-semibold'>공용 시설</h3>
        <div className='flex flex-wrap gap-2'>
          {publicServices.map((service, index) => (
            <button
              key={index}
              className={`rounded-full border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none ${selectedPublicServices.includes(service) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => handleSelectPublicService(service)}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-base font-semibold'>객실 내 시설</h3>
        <div className='flex flex-wrap gap-2'>
          {roomServices.map((service, index) => (
            <button
              key={index}
              className={`rounded-full border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none ${selectedRoomServices.includes(service) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => handleSelectRoomService(service)}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFilter;

import { atom } from 'recoil';

const hotelInfoState = atom({
  key: 'hotelInfoState',
  default: {
    category: undefined,
    name: undefined,
    description: undefined,
    notice: undefined,
    province: undefined,
    city: undefined,
    district: undefined,
    detailedAddress: undefined,
    mainImage: undefined,
    certUrl: undefined,
    visitGuidance: undefined,
    parking: false,
    breakfast: false,
    wifi: false,
    cigarette: false,
    noCigarette: false,
    looftop: false,
    allDayDesk: false,
    luggageKeep: false,
    spar: false,
    restaurant: false,
    fitness: false,
    sauna: false,
    swimming: false,
    bbq: false,
    market: false,
    dryer: false,
    loadKeep: false,
    pet: false,
  },
});

export default hotelInfoState;

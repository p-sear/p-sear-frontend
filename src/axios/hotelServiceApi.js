import authInstance from './utils/authInstance';

export const postHotelServiceRequest = async (path, data) =>
  authInstance.post(`/hotel${path}`, data);

export const getHotelServiceRequest = async (path, config) =>
  authInstance.get(`/hotel${path}`, config);

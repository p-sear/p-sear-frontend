import { postHotelServiceRequest } from './hotelServiceApi';

/*
{
  "roomId": 0,
  "visitorCount": 0,
  "adultCount": 0,
  "childCount": 0,
  "startAt": "2024-06-09",
  "endAt": "2024-06-09"
}
*/

export const postReservation = async data =>
  postHotelServiceRequest('/reservations', data);

export const postPaymentCheck = async (reservationId, impUid) =>
  postHotelServiceRequest(
    `/reservations/${reservationId}/check-payment`,
    impUid,
  );

export const Types = {
  GET_DOCTORS_REQUEST: 'GET_DOCTORS_REQUEST',
  GET_DOCTORS_SUCCESS: 'GET_DOCTORS_SUCCESS'
};

export const getDoctorsRequest = () => ({
  type: Types.GET_DOCTORS_REQUEST
});

export const getDoctorsSuccess = items => ({
  type: Types.GET_DOCTORS_SUCCESS,
  payload: { items }
});

import { Types } from '../actions/doctors';

const initialState = {
  items: []
};

export const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_DOCTORS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
};

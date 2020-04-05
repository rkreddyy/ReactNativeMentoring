import { LOGIN, SIGNUP, LOGOUT } from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId
      };
    case LOGOUT:
      return initialState;
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId
      };
    default:
      return state;
  }
};

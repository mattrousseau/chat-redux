import { initialState } from '../index';

const currentUserReducer = (state = null, action) => {
  if (state === null) {
    return initialState.currentUser;
  }

  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;

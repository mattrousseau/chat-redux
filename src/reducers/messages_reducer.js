import { initialState } from '../index';

const messagesReducer = (state = null, action) => {
  if (state === null) {
    return initialState.messages;
  }

  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload.messages;
    case "NEW_MESSAGE":
      return [...state, action.payload];
    case "SELECT_CHANNEL":
      return [];
    default:
      return state;
  }
};

export default messagesReducer;

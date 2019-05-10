import { initialState } from '../index';

const channelsReducer = (state = null, action) => {
  if (state === null) {
    return initialState.channels;
  }

  switch (action.type) {
    case "SET_CHANNELS":
      return action.payload;
    default:
      return state;
  }
};

export default channelsReducer;

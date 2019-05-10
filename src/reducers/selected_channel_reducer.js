import { initialState } from '../index';

const selectedChannelReducer = (state = null, action) => {
  if (state === null) {
    return initialState.selectedChannel;
  }

  switch (action.type) {
    case "SELECT_CHANNEL":
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;

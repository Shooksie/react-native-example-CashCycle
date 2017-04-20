import {
  FETCH_STARTUPS,
} from '../actions/types';

const INITIAL_STATE = {
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case FETCH_STARTUPS:
        return action.payload;
      default:
        return state;
  }
};

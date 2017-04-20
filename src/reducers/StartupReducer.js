import {
  STARTUP_FETCH,
  FETCH_STARTUPS
} from '../actions/types';

const INITIAL_STATE = {

};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case STARTUP_FETCH:
        console.log(action.payload);
        return action.payload;
      default:
        return state;
  }
};

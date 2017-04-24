import {
  FETCH_STARTUPS,
} from '../actions/types';

const INITIAL_STATE = {
  startups: {}
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case FETCH_STARTUPS:
        return {...state, startups: action.payload};
      default:
        return state;
  }
};

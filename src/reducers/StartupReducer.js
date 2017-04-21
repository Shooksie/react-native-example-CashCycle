import {
  STARTUP_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  startups: {}
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case STARTUP_FETCH:
        console.log(action.payload);
        return { ...state, startups: action.payload, loading: false };
      default:
        return state;
  }
};

import {
  POOL_FETCH_SUCCESS,
  POOL_INFO
} from '../actions/types';

const INITIAL_STATE = {
  pool: {},
  poolInfo: {}
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case POOL_FETCH_SUCCESS:
        return { ...state, pool: action.payload };
      case POOL_INFO:
        return { ...state, poolInfo: action.payload };
      default:
        return state;
  }
};

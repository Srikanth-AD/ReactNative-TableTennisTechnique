import {
  SUMMARIES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUMMARIES_FETCH_SUCCESS:
      //console.log("summary reducer: action.payload", action.payload);
      return action.payload;

    default:
      return state;

  }
}

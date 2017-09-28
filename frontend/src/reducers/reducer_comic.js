import { FETCH_COMIC } from '../actions/index';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_COMIC:
      return action.payload.data;
    default: return state;
  }
}


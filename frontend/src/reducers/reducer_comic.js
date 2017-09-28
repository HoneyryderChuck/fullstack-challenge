import { FETCH_COMIC, RESET_COMIC } from '../actions/index';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_COMIC:
      return action.payload.data;
    case RESET_COMIC:
      return null;
    default: return state;
  }
}


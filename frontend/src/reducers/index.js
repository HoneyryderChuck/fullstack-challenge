import { combineReducers } from 'redux';
import ComicReducer from './reducer_comic';
import ComicsReducer from './reducer_comics';
import SearchReducer from './reducer_search';
import LoadingReducer from './reducer_loading';
import UpVotesReducer from './reducer_upvotes';

const rootReducer = combineReducers({
  comic: ComicReducer,
  comics: ComicsReducer,
  search_term: SearchReducer,
  up_votes: UpVotesReducer,
  loading: LoadingReducer,
});

export default rootReducer;

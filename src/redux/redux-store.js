import { combineReducers, legacy_createStore } from 'redux';
import contentReducer from './content-reducer';

let reducers = combineReducers({
  content: contentReducer,
});

let store = legacy_createStore(reducers);

export default store;

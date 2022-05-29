import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { imageReducer } from '../reducers/reducers';

const rootReducer = combineReducers({ imageReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));


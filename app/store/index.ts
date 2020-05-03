import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import asyncRequestMiddleware from 'services/asyncRequestMiddleware';
import rootReducer from './RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk, asyncRequestMiddleware));

export default store;
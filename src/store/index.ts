import { applyMiddleware } from '@reduxjs/toolkit';
import {createStore} from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk))
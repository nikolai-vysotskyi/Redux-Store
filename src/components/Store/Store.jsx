import React from 'react';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';
import structure from './structure.js';

let _store;
const _create = (reducersObject = {}, middleware) => {
    const appliedMiddleware = applyMiddleware(thunk, typeof middleware === 'function' ?
        middleware :
        (store) => (next) => (action) => next(action));
    return createStore(_combineReducers(reducersObject), undefined, appliedMiddleware);
};

const _combineReducers = (reducersObject = {}) => {
    let i = 0;
    const reducers = {};
    const keys = Object.keys(reducersObject);
	
    while (i < keys.length) {
        reducers[keys[i]] = reducersObject[keys[i]];
        i++;
    }
    return combineReducers(reducers);
};
export default () => _store;

export const Provider = ({ children }) => {
    return <StoreProvider store={(_store = _create(structure))}>
        {children}
    </StoreProvider>;
};

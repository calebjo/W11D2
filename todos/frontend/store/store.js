import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import logger from 'react-redux';
import thunk from 'react-redux'
// import thunk from '../middleware/thunk';

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState, applyMiddleware(thunk, logger));
};

export default configureStore;
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store Creation
    const store = createStore(combineReducers({
        auth: authReducer // now we have access to state.auth
    }),
     composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers/index'
import thunk from 'redux-thunk'
<<<<<<< HEAD
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)))
=======

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk))
)
>>>>>>> eeac9096bf64c09fb6c4886541bf3ce0ec3edeb0
export default store;
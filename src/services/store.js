
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default initialState => {
    initialState =
        JSON.parse(window.localStorage.getItem('state')) || initialState;
    const middleware = [thunk];


    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
            // window.__REDUX_DEVTOOLS_EXTENSION__ &&
            // window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;

};


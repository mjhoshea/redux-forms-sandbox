import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux";
import App from "./App";


const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    combineReducers({
        form: formReducer
    }),
    applyMiddleware(sagaMiddleWare)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

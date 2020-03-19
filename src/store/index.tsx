import {InitialState, ReducerActions} from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from "../reducers";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

// @ts-ignore
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<InitialState, ReducerActions, any, any>(
    rootReducer,
    storeEnhancers(
        applyMiddleware(initialiseSagaMiddleware)
    )
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
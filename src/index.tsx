// Libraries
import * as React from 'react';
import * as reactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
// Components
import AppContainer from './containers/app/app';
//
import {createAPI} from './api';
import combinedReducer from './store/reducers/combined-reducer';
import OperationCreator from './store/operations/operation-creator';
import ActionCreator from './store/actions/action-creator';

function handleNoResponse() {
  store.dispatch(ActionCreator.showNotification(`Server is not responding`, `Sorry, but the server is not responding.`));
}

function handleServerUnavailable() {
  store.dispatch(ActionCreator.showNotification(`Server is unavailable`, `Sorry, but the server is not available.`));
}

function handleBadRequest() {
  store.dispatch(ActionCreator.showNotification(`Bad request`, `Sorry, but the server can\'t recognize this request.`));
}

const api = createAPI(handleNoResponse, undefined, handleBadRequest, handleServerUnavailable);

const store = applyMiddleware(thunk.withExtraArgument(api))(createStore)(
    combinedReducer,
    // Я так и не понял, что компилятору TS не нравится
    // eslint-disable-next-line
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(OperationCreator.loadSpecialMovie());

reactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>, document.getElementById(`root`));

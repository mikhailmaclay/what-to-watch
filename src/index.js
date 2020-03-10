// Libraries
import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Components
import AppContainer from './containers/app';
// Store
import store from './store';

reactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>, document.getElementById(`root`));

// Libraries
import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Components
import AppContainer from './components/app/app.container';
// Store
import store from './store';

reactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>, document.getElementById(`root`));

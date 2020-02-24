// Libraries
import React from 'react';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Components
import ConnectedApp from './components/app/app.connect';
// Store
import store from './store';

reactDOM.render(
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>, document.getElementById(`root`));

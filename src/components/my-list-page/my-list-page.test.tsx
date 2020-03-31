// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import MyListPage from './my-list-page';
//
import {mockMovie} from '../../test-mock-data';

const mockStore = configureStore([]);

describe(`<MyListPage/>`, () => {
  const store = mockStore({
    user: {id: 1, email: `johndoe@gmail.com`, name: `John Doe`, avatar: ``, myList: [mockMovie]},
  });

  const props = {
    movies: [mockMovie]
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <MyListPage {...props}/>
        </Provider>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

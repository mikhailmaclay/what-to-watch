// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import AddReviewPage from './add-review-page';

const mockStore = configureStore([]);

describe(`<AddReviewPage/>`, () => {
  const store = mockStore({
    user: {id: 1, email: `johndoe@gmail.com`, name: `John Doe`, avatar: ``},
  });

  const props = {
    movie: {
      name: `Test`,
      poster: ``,
      background: [``, ``]
    },
    baseURL: ``,
    showNotification: () => {},
    addReview: () => {}
  };
  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <AddReviewPage {...props}/>
        </Provider>, {createNodeMock: () => ({elements: []})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

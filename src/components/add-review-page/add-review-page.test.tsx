// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
// Components
import AddReviewPage from './add-review-page';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function.js';
import {mockMovie, mockUser} from '../../test-mock-data';

const mockStore = configureStore([]);

describe(`<AddReviewPage/>`, () => {
  const store = mockStore({
    user: mockUser,
  });

  const props = {
    movie: mockMovie,
    baseURL: `/films/1`,
    isFetching: false,
    showNotification: emptyArrowFunction,
    addReview: emptyArrowFunction
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Provider store={store}>
          <AddReviewPage {...props}/>
        </Provider>, {createNodeMock: () => ({elements: {rating: {value: 5}, [`review-text`]: `Hello there!`}})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

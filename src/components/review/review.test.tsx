// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Constants and utils
import extend from '../../utils/objects/extend';
// Components
import Review from './review';
import {mockReview} from '../../test-mock-data';

describe(`<Review/>`, () => {
  const props = extend(mockReview, {fullName: null, userName: mockReview.user.fullName});

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Review {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

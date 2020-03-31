// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import PreviewControls from './preview-controls';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function.js';

describe(`<PreviewControls/>`, () => {
  const props = {
    isMuted: false,
    onToggleMuteButtonClick: emptyArrowFunction
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <PreviewControls {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

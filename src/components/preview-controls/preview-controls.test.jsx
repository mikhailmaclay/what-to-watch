// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import PreviewControls from './preview-controls';

describe(`<PreviewControls/>`, () => {
  const props = {
    isMuted: false,
    onToggleMuteButtonClick: () => {}
  };

  it(`should render correctly`, () => {
    const result = renderer.create(
        <PreviewControls {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

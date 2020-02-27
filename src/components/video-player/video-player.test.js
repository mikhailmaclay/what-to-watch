// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import {VideoPlayer} from './video-player';

HTMLMediaElement.prototype.play = () => {};

describe(`<VideoPlayer/>`, () => {
  const props = {
    setIsPlayingToTrue: () => {},
    setIsPlayingToFalse: () => {},
    setIsPausedToTrue: () => {},
    setIsPausedToFalse: () => {},
    toggleIsMuted: () => {},
  };
  it(`should render correctly`, () => {
    const result = renderer.create(
        <VideoPlayer {...props}/>
    );

    expect(result).toMatchSnapshot();
  });
});

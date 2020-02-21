// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import VideoPlayer from './video-player';

it(`<VideoPlayer/> should render correctly`, () => {
  const result = renderer.create(
      <VideoPlayer/>
  );

  expect(result).toMatchSnapshot();
});

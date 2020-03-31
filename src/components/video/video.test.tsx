// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import {Video} from './video';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function';

describe(`<Video/>`, () => {
  const props = {
    duration: 100,
    currentTime: 1,
    isMetadataLoaded: false,
    isFullscreen: false,
    isWatchMode: false,
    isPlaying: false,
    isWaiting: false,
    isPaused: false,
    isEnded: false,
    isMuted: false,
    onLoadedMetadata: emptyArrowFunction,
    onPlay: emptyArrowFunction,
    onPause: emptyArrowFunction,
    onPlaying: emptyArrowFunction,
    onEnded: emptyArrowFunction,
    onWaiting: emptyArrowFunction,
    onCanPlayThrough: emptyArrowFunction,
    onDurationChange: emptyArrowFunction,
    onTimeUpdate: emptyArrowFunction,
    onMute: emptyArrowFunction,
    onFullscreenChange: emptyArrowFunction,
    onMouseMove: emptyArrowFunction,
    onMouseLeave: emptyArrowFunction,
    onWatchMode: emptyArrowFunction
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <Video {...props}/>, {createNodeMock: () => ({})}
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

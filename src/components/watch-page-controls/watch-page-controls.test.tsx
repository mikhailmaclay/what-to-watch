// Libraries
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Components
import WatchPageControls from './watch-page-controls';
//
import emptyArrowFunction from '../../utils/components/empty-arrow-function';

describe(`<WatchPageControls/>`, () => {
  const props = {
    name: `Test`,
    isFullscreen: false,
    isPlaying: true,
    isMetadataLoaded: true,
    isWaiting: false,
    isPaused: false,
    isEnded: false,
    isWatchMode: false,
    currentTime: 1,
    duration: 100,
    onFullscreenButtonClick: emptyArrowFunction,
    onPlayButtonClick: emptyArrowFunction,
    onProgressBarClick: emptyArrowFunction,
    onProgressBarMouseOver: emptyArrowFunction,
    onProgressBarButtonMouseDown: emptyArrowFunction,
    onClose: emptyArrowFunction,
  };

  it(`Should render correctly`, () => {
    const result = renderer.create(
        <WatchPageControls {...props}/>
    ).toJSON();

    expect(result).toMatchSnapshot();
  });
});

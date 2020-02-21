// Libraries
import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Components
import {BrowserRouter} from 'react-router-dom';
import VideoPlayer from './video-player';
import MovieCard from '../movie-card/movie-card';
// HOCs
import withPreviewOnHover from '../../hocs/with-preview-on-hover';

const movie = {
  id: 9,
  name: `Sintel`,
  genre: `Fantasy`,
  releaseDate: `September 27, 2010`,
  description: [
    `The film follows a girl named Sintel who is searching for a baby dragon she calls Scales. A flashback reveals that Sintel found Scales with its wing injured and helped care for it, forming a close bond with it. By the time its wing recovered and it was able to fly, Scales was caught by an adult dragon. Sintel has since embarked on a quest to rescue Scales, fending off beasts and warriors along the way. She eventually comes across a cave housing an adult and baby dragon, the latter of which she believes to be Scales. The adult dragon discovers and attacks Sintel, but hesitates to kill her. Sintel slays the dragon, only to recognize the scar on its wing and realize the dragon is an adult Scales, and that she too has aged considerably. Sintel leaves the cave heartbroken, unknowingly followed by Scales's baby.`
  ],
  runTime: 14,
  team: [
    {fullName: `Colin Levy`, role: `Director`},
    {fullName: `Halina Reijn`, role: `Actor`},
    {fullName: `Thom Hoffman`, role: `Actor`}
  ],
  reviews: [],
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `/img/sintel-poster.jpg`,
  images: [`/img/sintel.jpg`],
  background: `/img/bg-sintel.jpg`
};

const MovieCardWithPreviewOnHover = withPreviewOnHover(MovieCard);

configure({adapter: new Adapter()});

it(`<VideoPlayer/> as a preview should be rendered and change isPlaying state to true on mouseenter event`, () => {
  const wrapper = mount(
      <BrowserRouter>
        <MovieCardWithPreviewOnHover {...movie}/>
      </BrowserRouter>
  );

  expect(wrapper.find(VideoPlayer).length).toEqual(0);

  jest.useFakeTimers();

  wrapper.find(MovieCardWithPreviewOnHover).simulate(`mouseenter`);

  jest.advanceTimersByTime(1000);

  wrapper.update();

  expect(wrapper.find(VideoPlayer).length).toEqual(1);
  expect(wrapper.find(VideoPlayer).props().isPlaying).toEqual(true);
});

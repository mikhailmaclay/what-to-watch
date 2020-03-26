import ActionCreator from '../../actions/action-creator';
import specialMovie from './special-movie';

const mockSpecialMovie = {
  id: 1,
  name: `A Star Is Born`,
  genre: `Drama`,
  releaseDate: `2018`,
  description: [
    `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`
  ],
  runTime: 136,
  team: [
    {
      fullName: `Bradley Cooper`,
      role: `Director`
    },
    {
      fullName: `Lady Gaga`,
      role: `Actor`
    },
    {
      fullName: `Bradley Cooper`,
      role: `Actor`
    },
    {
      fullName: `Sam Elliott`,
      role: `Actor`
    }
  ],
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/A_Star_Is_Born.jpg`,
  images: [
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/A_Star_Is_Born.jpg`
  ],
  background: [
    `#C4C0C0`,
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/A_Star_is_Born.jpg`
  ],
  rating: 3.9,
  scoresCount: 244484,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  isInMyList: false,
  reviews: null
};

describe(`specialMovie`, () => {
  it(`On LOAD_SPECIAL_MOVIE should work correctly`, () => {
    expect(specialMovie(null, ActionCreator.loadSpecialMovie(mockSpecialMovie))).toEqual(mockSpecialMovie);
  });
});

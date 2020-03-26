// Constants and utils
import extend from '../../../utils/objects/extend';
//
import ActionCreator from '../../actions/action-creator';
import movie from './movie';

const FIRST_MOVIE_ID = 1;

const mockMovie = {
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

const mockReviews = [
  {
    id: 1,
    user: {
      id: 14,
      fullName: `Corey`
    },
    date: `2020-03-01T07:42:41.938Z`,
    rating: 6.1,
    text: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`
  }
];

describe(`movie`, () => {
  it(`On LOAD_REVIEWS should work correctly`, () => {
    expect(movie(mockMovie, ActionCreator.loadReviews(FIRST_MOVIE_ID, mockReviews))).toEqual(extend(mockMovie, {reviews: mockReviews}));
  });
});

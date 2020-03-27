// Libraries
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
// Constants and utils
import adaptMovie from '../../utils/data/adapters/adapt-movie';
import adaptReview from '../../utils/data/adapters/adapt-review';
import extend from '../../utils/objects/extend';
import adaptUser from '../../utils/data/adapters/adapt-user';
//
import {createAPI} from '../../api';
import OperationCreator from './operation-creator';
import ActionType from '../action-type';

const FIRST_MOVIE_ID = 1;
const IN_MY_LIST_MOVIE_STATUS = 1;

const mockStore = configureStore([]);
const api = createAPI();

const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  [`avatar_url`]: `img/1.png`,
  myList: null
};


const mockMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  [`poster_image`]: `img/the-grand-budapest-hotel-poster.jpg`,
  [`preview_image`]: `img/the-grand-budapest-hotel.jpg`,
  [`background_image`]: `img/the-grand-budapest-hotel-bg.jpg`,
  [`background_color`]: `#ffffff`,
  [`video_link`]: `https://some-link`,
  [`preview_video_link`]: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  [`scores_count`]: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  [`run_time`]: 99,
  genre: `Comedy`,
  released: 2014,
  [`is_favorite`]: false
};

const mockReview = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};

describe(`Operations`, () => {
  it(`loadMovies should make a correct API call to /films`, () => {
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onGet(`/films`)
      .reply(200, [mockMovie]);
    const dispatch = jest.fn();
    const loadMoviesOperation = OperationCreator.loadMovies();

    return loadMoviesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2); // Два, так как в операции происходит диспетчеризация двух действий LOAD_MOVIES и LOAD_GENRES
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [adaptMovie(mockMovie)],
        });
      });
  });

  it(`loadSpecialMovie should make a correct API call to /films/promo`, () => {
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onGet(`/films/promo`)
      .reply(200, mockMovie);
    const dispatch = jest.fn();
    const loadSpecialMovieOperation = OperationCreator.loadSpecialMovie();

    return loadSpecialMovieOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SPECIAL_MOVIE,
          payload: adaptMovie(mockMovie),
        });
      });
  });

  it(`loadMyList should make a correct API call to /favorite`, () => {
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onGet(`/favorite`)
      .reply(200, [mockMovie]);
    const dispatch = jest.fn();
    const loadMyListOperation = OperationCreator.loadMyList();

    return loadMyListOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MY_LIST,
          payload: [adaptMovie(mockMovie)],
        });
      });
  });

  it(`loadReviews should make a correct API call to /comments/:movieID`, () => {
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onGet(`/comments/${FIRST_MOVIE_ID}`)
      .reply(200, [mockReview]);
    const dispatch = jest.fn();
    const loadReviewsOperation = OperationCreator.loadReviews(FIRST_MOVIE_ID);

    return loadReviewsOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: {id: FIRST_MOVIE_ID, reviews: [adaptReview(mockReview)]},
        });
      });
  });

  it(`changeMovieStatus should make a correct API call to /favorite/:movieID/:status`, () => {
    const store = mockStore({
      user: adaptUser(mockUser)
    });
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onPost(`/favorite/${FIRST_MOVIE_ID}/${IN_MY_LIST_MOVIE_STATUS}`)
      .reply(200, extend(mockMovie, {[`is_favorite`]: true}));
    const dispatch = jest.fn();
    const changeMovieStatusOperation = OperationCreator.changeMovieStatus(FIRST_MOVIE_ID, IN_MY_LIST_MOVIE_STATUS);

    return changeMovieStatusOperation(dispatch, store.getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_MOVIE_STATUS,
          payload: {id: FIRST_MOVIE_ID, isInMyList: true},
        });
      });
  });

  it(`addReview should make a correct API call to /comments/:movieID`, () => {
    // TODO
  });

  it(`login should make a correct API call to /login`, () => {
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onPost(`/login`)
      .reply(200, mockUser);
    const dispatch = jest.fn();
    const loadReviewsOperation = OperationCreator.login(`Oliver.conner@gmail.com`, ``);

    return loadReviewsOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZE,
          payload: adaptUser(mockUser),
        });
      });
  });

  it(`checkAuthorization should make a correct API call to /login`, () => {
    const mockAPI = new MockAdapter(api);
    mockAPI
      .onGet(`/login`)
      .reply(200, mockUser);
    const dispatch = jest.fn();
    const loadReviewsOperation = OperationCreator.checkAuthorization();

    return loadReviewsOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZE,
          payload: adaptUser(mockUser),
        });
      });
  });
});

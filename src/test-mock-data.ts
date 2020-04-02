import {User, Movie, Review, TeamMember, Notification} from './types';

export const mockUser: User = {
  id: 1,
  email: `JohnnyMnemonyc@mail.ru`,
  name: `Johnny`,
  avatar: `https://htmlacademy-react-3.appspot.com/wtw/static/avatar/4.jpg`,
  myList: null
};

export const mockReview: Review = {
  id: 1,
  user: {id: mockUser.id, fullName: mockUser.name},
  date: `2020-03-24T08:26:50.139Z`,
  rating: 10,
  text: `It was really awesome!`
};

export const mockDirector: TeamMember = {
  fullName: `Wes Anderson`,
  role: `Director`
};

export const mockActor: TeamMember = {
  fullName: `Adrien Brody`,
  role: `Actor`
};

export const mockMovie: Movie = {
  id: 1,
  name: `Dardjeeling Limited`,
  genre: `Adventure`,
  releaseDate: `2007`,
  description: [
    `A year after their father\`s funeral, three brothers travel across India by train in an attempt to bond with each other.`
  ],
  runTime: 91,
  team: [
    mockDirector,
    mockActor
  ],
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Dardjeeling_Limited.jpg`,
  images: [
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/dardjeeling_limited.jpg`
  ],
  backgrounds: [
    `#AD9F8B`,
    `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Dardjeeling_Limited.jpg`
  ],
  rating: 3.6,
  scoresCount: 165106,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  isInMyList: false,
  reviews: null
};

export const mockNotification: Notification = {
  title: `Test`,
  content: `Testing message.`
};

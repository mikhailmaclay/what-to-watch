export interface Movie {
  id: number,
  name: string,
  genre: string,
  releaseDate: string,
  description: string[],
  runTime: number,
  team: TeamMember[],
  poster: string,
  images: string[],
  backgrounds: string[],
  rating: number,
  scoresCount: number,
  preview: string,
  video: string,
  isInMyList: boolean,
  reviews: null | Review[]
}

export interface TeamMember {
  role: string,
  fullName: string
}

export interface Review {
  id: number,
  user: {id: number, fullName: string},
  date: string,
  rating: number,
  text: string
}

export interface User {
  id: number,
  email: string,
  name: string,
  avatar: string,
  myList: null | Movie[]
}

export interface Notification {
  title: string,
  content: string
}

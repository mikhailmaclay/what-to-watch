const POSTER_URL = `https://via.placeholder.com/218x327`;
const IMAGE_URL = `https://via.placeholder.com/280x175`;
const BACKGROUND_URL = `https://via.placeholder.com/1300x552`;

export default [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    team: [
      {fullName: `Wes Anderson`, role: `Director`},
      {fullName: `Bill Murray`, role: `Actor`},
      {fullName: `Edward Norton`, role: `Actor`},
      {fullName: `Jude Law`, role: `Actor`},
      {fullName: `Willem Dafoe`, role: `Actor`},
      {fullName: `Adrien Brody`, role: `Actor`}
    ],
    ratings: [6, 4, 10, 9, 8],
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    images: [IMAGE_URL],
    background: `/img/bg-the-grand-budapest-hotel.jpg`,
  },
  {
    id: 2,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    releaseDate: `2018`,
    description: [
      `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`
    ],
    team: [
      {fullName: `David Yates`, role: `Director`},
      {fullName: `Eddie Redmayne`, role: `Actor`},
      {fullName: `Katherine Waterston`, role: `Actor`},
      {fullName: `Dan Fogler`, role: `Actor`},
      {fullName: `Johnny Depp`, role: `Actor`},
      {fullName: `Carmen Ejogo`, role: `Actor`}
    ],
    ratings: [1, 4, 9, 9, 9],
    poster: POSTER_URL,
    images: [`/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 3,
    name: `Bohemian Rhapsody`,
    genre: `Drama`,
    releaseDate: `2018`,
    description: [
      `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`
    ],
    team: [
      {fullName: `Bryan Singer`, role: `Director`},
      {fullName: `Rami Malek`, role: `Actor`},
      {fullName: `Lucy Boynton`, role: `Actor`},
      {fullName: `Gwilym Lee`, role: `Actor`}
    ],
    ratings: [1, 4, 3, 2, 2],
    poster: POSTER_URL,
    images: [`img/bohemian-rhapsody.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 4,
    name: `Macbeth`,
    genre: `Drama`,
    releaseDate: `2015`,
    description: [
      `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`
    ],
    team: [
      {fullName: `Justin Kurzel`, role: `Director`},
      {fullName: `Michael Fassbender`, role: `Actor`},
      {fullName: `Marion Cotillard`, role: `Actor`},
      {fullName: `Jack Madigan`, role: `Actor`}
    ],
    ratings: [9],
    poster: POSTER_URL,
    images: [`img/macbeth.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 5,
    name: `The Aviator`,
    genre: `Drama`,
    releaseDate: `2004`,
    description: [
      `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`
    ],
    team: [
      {fullName: `Justin Kurzel`, role: `Director`},
      {fullName: ` Leonardo DiCaprio`, role: `Actor`},
      {fullName: `Cate Blanchett`, role: `Actor`},
      {fullName: `Kate Beckinsale`, role: `Actor`}
    ],
    ratings: [10, 10, 10, 9],
    poster: POSTER_URL,
    images: [`img/aviator.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 6,
    name: `We Need to Talk About Kevin`,
    genre: `Drama`,
    releaseDate: `2011`,
    description: [
      `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`
    ],
    team: [
      {fullName: `Lynne Ramsay`, role: `Director`},
      {fullName: `Tilda Swinton`, role: `Actor`},
      {fullName: `John C. Reilly`, role: `Actor`},
      {fullName: `Ezra Miller`, role: `Actor`}
    ],
    ratings: [4, 10, 1, 9],
    poster: POSTER_URL,
    images: [`img/we-need-to-talk-about-kevin.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 7,
    name: `What We Do in the Shadows`,
    genre: `Comedy`,
    releaseDate: `2011`,
    description: [
      `A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.`
    ],
    team: [
      {fullName: `Jemaine Clement`, role: `Director`},
      {fullName: `Kayvan Novak`, role: `Actor`},
      {fullName: `Matt Berry`, role: `Actor`},
      {fullName: `Natasia Demetriou`, role: `Actor`}
    ],
    ratings: [8, 6, 9, 9],
    poster: POSTER_URL,
    images: [`img/what-we-do-in-the-shadows.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 8,
    name: `The Revenant`,
    genre: `Action`,
    releaseDate: `2015`,
    description: [
      `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`
    ],
    team: [
      {fullName: `Alejandro G. Iñárritu`, role: `Director`},
      {fullName: `Leonardo DiCaprio`, role: `Actor`},
      {fullName: `Tom Hardy`, role: `Actor`},
      {fullName: `Will Poulter`, role: `Actor`}
    ],
    ratings: [10, 10, 10, 10, 10, 10, 10, 10, 10],
    poster: POSTER_URL,
    images: [`img/revenant.jpg`],
    background: BACKGROUND_URL
  },
  {
    id: 9,
    name: `Johnny English`,
    genre: `Action`,
    releaseDate: `2003`,
    description: [
      `After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.`
    ],
    team: [
      {fullName: `Peter Howitt`, role: `Director`},
      {fullName: `Rowan Atkinson`, role: `Actor`},
      {fullName: `John Malkovich`, role: `Actor`},
      {fullName: `Natalie Imbruglia`, role: `Actor`}
    ],
    ratings: [5, 6, 3, 10],
    poster: POSTER_URL,
    images: [`img/johnny-english.jpg`],
    background: BACKGROUND_URL
  }
];

const movies = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `March 13, 2014`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    runTime: 100,
    team: [
      {fullName: `Wes Anderson`, role: `Director`},
      {fullName: `Bill Murray`, role: `Actor`},
      {fullName: `Edward Norton`, role: `Actor`},
      {fullName: `Jude Law`, role: `Actor`},
      {fullName: `Willem Dafoe`, role: `Actor`},
      {fullName: `Adrien Brody`, role: `Actor`}
    ],
    reviews: [1, 2, 3, 4, 5],
    poster: `/img/movies/posters/1.jpg`,
    images: [`/img/movies/images/1-1.jpg`],
    background: `/img/movies/backgrounds/1.jpg`,
  },
  {
    id: 2,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    releaseDate: `November 15, 2018`,
    description: [
      `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`
    ],
    runTime: 133,
    team: [
      {fullName: `David Yates`, role: `Director`},
      {fullName: `Eddie Redmayne`, role: `Actor`},
      {fullName: `Katherine Waterston`, role: `Actor`},
      {fullName: `Dan Fogler`, role: `Actor`},
      {fullName: `Johnny Depp`, role: `Actor`},
      {fullName: `Carmen Ejogo`, role: `Actor`}
    ],
    reviews: [6],
    poster: `/img/movies/posters/2.jpg`,
    images: [`/img/movies/images/2-1.jpg`],
    background: `/img/movies/backgrounds/2.jpg`
  },
  {
    id: 3,
    name: `Bohemian Rhapsody`,
    genre: `Drama`,
    releaseDate: `November 1, 2018`,
    description: [
      `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`
    ],
    runTime: 134,
    team: [
      {fullName: `Bryan Singer`, role: `Director`},
      {fullName: `Rami Malek`, role: `Actor`},
      {fullName: `Lucy Boynton`, role: `Actor`},
      {fullName: `Gwilym Lee`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/3.jpg`,
    images: [`/img/movies/images/3-1.jpg`],
    background: `/img/movies/backgrounds/3.jpg`
  },
  {
    id: 4,
    name: `Macbeth`,
    genre: `Drama`,
    releaseDate: `November 26, 2015`,
    description: [
      `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`
    ],
    runTime: 113,
    team: [
      {fullName: `Justin Kurzel`, role: `Director`},
      {fullName: `Michael Fassbender`, role: `Actor`},
      {fullName: `Marion Cotillard`, role: `Actor`},
      {fullName: `Jack Madigan`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/4.jpg`,
    images: [`/img/movies/images/4-1.jpg`],
    background: `/img/movies/backgrounds/4.jpg`
  },
  {
    id: 5,
    name: `The Aviator`,
    genre: `Drama`,
    releaseDate: `February 3, 2005`,
    description: [
      `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`
    ],
    runTime: 169,
    team: [
      {fullName: `Justin Kurzel`, role: `Director`},
      {fullName: ` Leonardo DiCaprio`, role: `Actor`},
      {fullName: `Cate Blanchett`, role: `Actor`},
      {fullName: `Kate Beckinsale`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/5.jpg`,
    images: [`/img/movies/images/5-1.jpg`],
    background: `/img/movies/backgrounds/5.jpg`
  },
  {
    id: 6,
    name: `We Need to Talk About Kevin`,
    genre: `Drama`,
    releaseDate: `January 19, 2012`,
    description: [
      `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`
    ],
    runTime: 112,
    team: [
      {fullName: `Lynne Ramsay`, role: `Director`},
      {fullName: `Tilda Swinton`, role: `Actor`},
      {fullName: `John C. Reilly`, role: `Actor`},
      {fullName: `Ezra Miller`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/6.jpg`,
    images: [`/img/movies/images/6-1.jpg`],
    background: `/img/movies/backgrounds/6.jpg`
  },
  {
    id: 7,
    name: `What We Do in the Shadows`,
    genre: `Comedy`,
    releaseDate: `January 19, 2014`,
    description: [
      `A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.`
    ],
    runTime: 85,
    team: [
      {fullName: `Jemaine Clement`, role: `Director`},
      {fullName: `Kayvan Novak`, role: `Actor`},
      {fullName: `Matt Berry`, role: `Actor`},
      {fullName: `Natasia Demetriou`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/7.jpg`,
    images: [`/img/movies/images/7-1.jpg`],
    background: `/img/movies/backgrounds/7.jpg`
  },
  {
    id: 8,
    name: `The Revenant`,
    genre: `Action`,
    releaseDate: `December 25, 2015`,
    description: [
      `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`
    ],
    runTime: 156,
    team: [
      {fullName: `Alejandro G. Iñárritu`, role: `Director`},
      {fullName: `Leonardo DiCaprio`, role: `Actor`},
      {fullName: `Tom Hardy`, role: `Actor`},
      {fullName: `Will Poulter`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/8.jpg`,
    images: [`/img/movies/images/8-1.jpg`],
    background: `/img/movies/backgrounds/8.jpg`
  },
  {
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
    poster: `/img/movies/posters/9.jpg`,
    images: [`/img/movies/images/9-1.jpg`],
    background: `/img/movies/backgrounds/9.jpg`
  },
  {
    id: 10,
    name: `Johnny English`,
    genre: `Action`,
    releaseDate: `April 11, 2003`,
    description: [
      `After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.`
    ],
    runTime: 87,
    team: [
      {fullName: `Peter Hovitt`, role: `Director`},
      {fullName: `Rowan Atkinson`, role: `Actor`},
      {fullName: `John Malkovich`, role: `Actor`},
      {fullName: `Natalie Imbruglia`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/10.jpg`,
    images: [`/img/movies/images/10-1.jpg`],
    background: `/img/movies/backgrounds/10.jpg`
  },
  {
    id: 11,
    name: `Shutter Island`,
    genre: `Mystery`,
    releaseDate: `February 19, 2010`,
    description: [
      `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`
    ],
    runTime: 138,
    team: [
      {fullName: `Martin Scorsese`, role: `Director`},
      {fullName: `Leonardo DiCaprio`, role: `Actor`},
      {fullName: `Emily Mortimer`, role: `Actor`},
      {fullName: `Mark Ruffalo`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/11.jpg`,
    images: [`/img/movies/images/11-1.jpg`],
    background: `/img/movies/backgrounds/11.jpg`
  },
  {
    id: 12,
    name: `Pulp Fiction`,
    genre: `Crime`,
    releaseDate: `October 14, 1994`,
    description: [
      `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`
    ],
    runTime: 154,
    team: [
      {fullName: `Quentin Tarantino`, role: `Director`},
      {fullName: `John Travolta`, role: `Actor`},
      {fullName: `Uma Thurman`, role: `Actor`},
      {fullName: `Samuel L. Jackson`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/12.jpg`,
    images: [`/img/movies/images/12-1.jpg`],
    background: `/img/movies/backgrounds/12.jpg`
  },
  {
    id: 13,
    name: `No Country for Old Men`,
    genre: `Crime`,
    releaseDate: `November 21, 2007`,
    description: [
      `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`
    ],
    runTime: 122,
    team: [
      {fullName: `Ethan Coen`, role: `Director`},
      {fullName: `Joel Coen`, role: `Director`},
      {fullName: `Tommy Lee Jones`, role: `Actor`},
      {fullName: `Javier Bardem`, role: `Actor`},
      {fullName: `Josh Brolin`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/13.jpg`,
    images: [`/img/movies/images/13-1.jpg`],
    background: `/img/movies/backgrounds/13.jpg`
  },
  {
    id: 14,
    name: `Snatch`,
    genre: `Comedy`,
    releaseDate: `January 19, 2001`,
    description: [
      `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`
    ],
    runTime: 102,
    team: [
      {fullName: `Guy Ritchie`, role: `Director`},
      {fullName: `Jason Statham`, role: `Actor`},
      {fullName: `Brad Pitt`, role: `Actor`},
      {fullName: `Benicio Del Toro`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/14.jpg`,
    images: [`/img/movies/images/14-1.jpg`],
    background: `/img/movies/backgrounds/14.jpg`
  },
  {
    id: 15,
    name: `Moonrise Kingdom`,
    genre: `Comedy`,
    releaseDate: `June 29, 2012`,
    description: [
      `A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.`
    ],
    runTime: 94,
    team: [
      {fullName: `Wes Anderson`, role: `Director`},
      {fullName: `Jared Gilman`, role: `Actor`},
      {fullName: `Kara Hayward`, role: `Actor`},
      {fullName: `Bruce Willis`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/15.jpg`,
    images: [`/img/movies/images/15-1.jpg`],
    background: `/img/movies/backgrounds/15.jpg`
  },
  {
    id: 16,
    name: `Seven Years in Tibet`,
    genre: `Adventure`,
    releaseDate: `October 10, 1997`,
    description: [
      `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`
    ],
    runTime: 136,
    team: [
      {fullName: `Jean-Jacques Annaud`, role: `Director`},
      {fullName: `Brad Pitt`, role: `Actor`},
      {fullName: `David Thewlis`, role: `Actor`},
      {fullName: `BD Wong`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/16.jpg`,
    images: [`/img/movies/images/16-1.jpg`],
    background: `/img/movies/backgrounds/16.jpg`
  },
  {
    id: 17,
    name: `Midnight Special`,
    genre: `Drama`,
    releaseDate: `April 21, 2016`,
    description: [
      `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`
    ],
    runTime: 112,
    team: [
      {fullName: `Jeff Nichols`, role: `Director`},
      {fullName: `Michael Shannon`, role: `Actor`},
      {fullName: `Joel Edgerton`, role: `Actor`},
      {fullName: `Kirsten Dunst`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/17.jpg`,
    images: [`/img/movies/images/17-1.jpg`],
    background: `/img/movies/backgrounds/17.jpg`
  },
  {
    id: 18,
    name: `War of the Worlds`,
    genre: `Adventure`,
    releaseDate: `June 29, 2005`,
    description: [
      `As Earth is invaded by alien tripod fighting machines, one family fights for survival in this sci-fi action film.`
    ],
    runTime: 116,
    team: [
      {fullName: `Steven Spielberg`, role: `Director`},
      {fullName: `Tom Cruise`, role: `Actor`},
      {fullName: `Dakota Fanning`, role: `Actor`},
      {fullName: `Tim Robbins`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/18.jpg`,
    images: [`/img/movies/images/18-1.jpg`],
    background: `/img/movies/backgrounds/18.jpg`
  },
  {
    id: 19,
    name: `The Darjeeling Limited`,
    genre: `Adventure`,
    releaseDate: `October 26, 2007`,
    description: [
      `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`
    ],
    runTime: 91,
    team: [
      {fullName: `Wes Anderson`, role: `Director`},
      {fullName: `Owen Wilson`, role: `Actor`},
      {fullName: `Adrien Brody`, role: `Actor`},
      {fullName: `Jason Schwartzman`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/19.jpg`,
    images: [`/img/movies/images/19-1.jpg`],
    background: `/img/movies/backgrounds/19.jpg`
  },
  {
    id: 20,
    name: `Orlando`,
    genre: `Biography`,
    releaseDate: `June 9, 1993`,
    description: [
      `After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world.`
    ],
    runTime: 94,
    team: [
      {fullName: `Sally Potter`, role: `Director`},
      {fullName: `Tilda Swinton`, role: `Actor`},
      {fullName: `Billy Zane`, role: `Actor`},
      {fullName: `Quentin Crisp`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/20.jpg`,
    images: [`/img/movies/images/20-1.jpg`],
    background: `/img/movies/backgrounds/20.jpg`
  },
  {
    id: 21,
    name: `Mindhunter`,
    genre: `Crime`,
    releaseDate: `October 13, 2017`,
    description: [
      `Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.`
    ],
    runTime: 60,
    team: [
      {fullName: `Joe Penhall`, role: `Director`},
      {fullName: `Jonathan Groff`, role: `Actor`},
      {fullName: `Holt McCallany`, role: `Actor`},
      {fullName: `Anna Torv`, role: `Actor`}
    ],
    reviews: [],
    poster: `/img/movies/posters/21.jpg`,
    images: [`/img/movies/images/21-1.jpg`],
    background: `/img/movies/backgrounds/21.jpg`
  }
];

const TEST_MOVIES_COUNT = 15;

const testMovies = new Array(TEST_MOVIES_COUNT).fill(``).map((movie, index) => ({
  id: movies.length + index + 1,
  name: `Lorem Ipsum`,
  genre: `Test`,
  releaseDate: `January 1, 2020`,
  description: [
    `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ],
  runTime: 60,
  team: [
    {fullName: `Lorem Ipsum`, role: `Director`},
    {fullName: `Dolor Sit`, role: `Actor`},
    {fullName: `Consectetur Adipiscing`, role: `Actor`},
    {fullName: `Eiusmod Tempor`, role: `Actor`}
  ],
  reviews: [],
  poster: `https://via.placeholder.com/273x410`,
  images: [`https://via.placeholder.com/280x175`],
  background: `https://via.placeholder.com/1300x552`
}));

export default movies.concat(testMovies);

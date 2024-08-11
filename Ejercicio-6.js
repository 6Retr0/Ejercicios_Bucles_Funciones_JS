const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

let sortedStarWars = {
  seventys: [],
  eighties: [],
  nineties: [],
  twoThounsands: [],
  twentyTens: [],
};

for (const movie of starWarsMovies) {
  if (movie.releaseYear < 1980) {
    sortedStarWars.seventys.push(movie);
  } else if (movie.releaseYear < 1990) {
    sortedStarWars.eighties.push(movie);
  } else if (movie.releaseYear < 2000) {
    sortedStarWars.nineties.push(movie);
  } else if (movie.releaseYear < 2010) {
    sortedStarWars.twoThounsands.push(movie);
  } else if (movie.releaseYear < 2020) {
    sortedStarWars.twentyTens.push(movie);
  }
}

console.log(sortedStarWars);

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

let sortedTracks = { metal: [], rock: [], pop: [], country: [], grunge: [] };

for (const track of tracks) {
  if (track.genre.includes("Metal")) {
    sortedTracks.metal.push(track);
  } else if (track.genre.includes("Rock")) {
    sortedTracks.rock.push(track);
  } else if (track.genre.includes("Pop")) {
    sortedTracks.pop.push(track);
  } else if (track.genre.includes("Country")) {
    sortedTracks.country.push(track);
  } else if (track.genre.includes("Grunge")) {
    sortedTracks.grunge.push(track);
  }
}

console.log(sortedTracks);

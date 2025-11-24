const express = require("express");
const app = express();

const port = 3001;

let movies = [
  { id: 1, title: "Inception", watchlist: true },
  { id: 2, title: "The Matrix", watchlist: false },
  { id: 3, title: "Interstellar", watchlist: true },
  { id: 4, title: "The Dark Knight", watchlist: false },
  { id: 5, title: "Pulp Fiction", watchlist: true },
  { id: 6, title: "Forrest Gump", watchlist: false },
  {
    id: 7,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    watchlist: true,
  },
  { id: 8, title: "The Shawshank Redemption", watchlist: false },
  { id: 9, title: "Gladiator", watchlist: true },
  { id: 10, title: "Titanic", watchlist: false },
];

app.get("/", (req, res) => {
  res.send("Hello From Express Server!");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

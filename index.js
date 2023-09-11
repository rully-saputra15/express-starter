const express = require("express");
const PORT = process.env.PORT || 3000;

const data = {
  movies: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: ["Drama"],
      rating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"],
    },
    {
      id: 2,
      title: "The Godfather",
      genre: ["Crime", "Drama"],
      rating: 9.2,
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    },
    {
      id: 4,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: ["Action", "Adventure", "Drama"],
      rating: 8.8,
      actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    },
    {
      id: 5,
      title: "Forrest Gump",
      genre: ["Drama", "Romance"],
      rating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    },
    {
      id: 6,
      title: "Inception",
      genre: ["Action", "Adventure", "Sci-Fi"],
      rating: 8.7,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    },
    {
      id: 7,
      title: "The Matrix",
      genre: ["Action", "Sci-Fi"],
      rating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    },
    {
      id: 8,
      title: "The Silence of the Lambs",
      genre: ["Crime", "Drama", "Thriller"],
      rating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    },
    {
      id: 9,
      title: "Saving Private Ryan",
      genre: ["Drama", "War"],
      rating: 8.6,
      actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    },
    {
      id: 10,
      title: "The Green Mile",
      genre: ["Crime", "Drama", "Fantasy"],
      rating: 8.6,
      actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    },
    {
      id: 11,
      title: "Pulp Fiction",
      genre: ["Crime", "Drama"],
      rating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    },
    {
      id: 12,
      title: "The Departed",
      genre: ["Crime", "Drama", "Thriller"],
      rating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    },
    {
      id: 13,
      title: "Gladiator",
      genre: ["Action", "Adventure", "Drama"],
      rating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    },
    {
      id: 14,
      title: "The Prestige",
      genre: ["Drama", "Mystery", "Sci-Fi"],
      rating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    },
    {
      id: 15,
      title: "The Lion King",
      genre: ["Animation", "Adventure", "Drama"],
      rating: 8.5,
      actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    },
    {
      id: 16,
      title: "The Usual Suspects",
      genre: ["Crime", "Mystery", "Thriller"],
      rating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
    },
    {
      id: 17,
      title: "The Terminator",
      genre: ["Action", "Sci-Fi"],
      rating: 8.0,
      actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"],
    },
    {
      id: 18,
      title: "Jurassic Park",
      genre: ["Action", "Adventure", "Sci-Fi"],
      rating: 8.1,
      actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    },
    {
      id: 19,
      title: "Die Hard",
      genre: ["Action", "Thriller"],
      rating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
    },
    {
      id: 20,
      title: "The Bourne Identity",
      genre: ["Action", "Mystery", "Thriller"],
      rating: 7.9,
      actors: ["Matt Damon", "Franka Potente", "Chris Cooper"],
    },
  ],
};

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET ALL MOVIES
app.get("/movies", (req, res) => {
  res.status(200).json(data);
});

// GET MOVIE BY ID WITH CONVERT ACTORS FIELD FROM ARRAY TO STRING

// actors: "john doe,jane doe"

// CREATE MOVIE

// UPDATE MOVIE FOR TITLE AND RATING FIELD

// FILTER MOVIE BY GENRE

// DELETE MOVIE

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

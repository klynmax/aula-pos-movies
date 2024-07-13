import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { MoviesList } from "./Components/MoviesList";
import { MoviesContainer } from "./Styles/MovieContainer";
import { MoviesService } from "./Api/MoviesService";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await MoviesService.getMovies();
    setMovies(data.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;

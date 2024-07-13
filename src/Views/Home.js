import { useEffect, useState } from "react";
import { MoviesService } from "../Api/MoviesService";
import { MoviesList } from "../Components/MoviesList";
import { MoviesContainer } from "../Styles/MovieContainer";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await MoviesService.getMovies();
    setMovies(data.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
};

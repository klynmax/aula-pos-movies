import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MoviesService } from "../Api/MoviesService";

export const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const data = await MoviesService.getMoviesById(id);
    setMovie(data.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};

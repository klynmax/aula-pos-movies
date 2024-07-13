import { MoviesItem } from "./MoviesItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((m) => (
        <MoviesItem movies={m} />
      ))}
    </ul>
  </section>
);

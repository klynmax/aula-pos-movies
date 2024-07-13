import { MoviesItem } from "./MoviesItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((m) => (
        <MoviesItem title={m.title} />
      ))}
    </ul>
  </section>
);

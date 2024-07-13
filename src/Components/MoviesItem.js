import { Link } from "react-router-dom";

export const MoviesItem = ({ movies }) => (
  <li>
    <Link to={`movie/${movies.id}`}>{movies.title}</Link>
  </li>
);

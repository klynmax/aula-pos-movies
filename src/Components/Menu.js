import { Link } from "react-router-dom";
import { MenuContaier } from "../Styles/MenuContainer";

export const Menu = () => (
  <MenuContaier>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
    </ul>
  </MenuContaier>
);

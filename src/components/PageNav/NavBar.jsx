import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <h2>Legacy Furniture</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

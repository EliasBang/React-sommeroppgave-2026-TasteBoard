import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}

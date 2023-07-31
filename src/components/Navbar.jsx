import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blue">blue</Link>
          </li>
          <li>
            <Link to="/red">red</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

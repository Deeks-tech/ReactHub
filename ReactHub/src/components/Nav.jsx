import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-wrapper">
      <Link to="/"> Home </Link>
      <Link to="/about"> About</Link>
    </div>
  );
}

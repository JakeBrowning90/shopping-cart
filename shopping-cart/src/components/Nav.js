import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="Nav">
      <nav>
        <ul>
          <li><h1>Logo</h1></li>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/shop'>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

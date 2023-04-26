import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="Header">
      <nav>
        <ul id="NavLinks">
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

export default Header;

import Logo from './img/Logo.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="Header">
      <nav>
        <ul id="NavLinks">
          <li>
            <img src={Logo} id='Logo'/>
          </li>
          <Link to='/'>
            <li>
              <h1>Home</h1>
            </li>
          </Link>
          <Link to='/shop'>
              <h1>Shop</h1>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

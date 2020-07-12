import Link from "next/link";

import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

import { Nav, NavMenu, NavMenuItem } from "./styles";
import Container from "../../styles/shared/Container";

const Header = () => {
  return (
    <header>
      <Container>
        <Nav>
          <h1>Logo</h1>
          <NavMenu>
            <NavMenuItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/">
                <a>Products</a>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/">
                <a>About</a>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </NavMenuItem>
          </NavMenu>
          <NavMenu>
            <NavMenuItem>
              <FiSearch />
            </NavMenuItem>
            <NavMenuItem>
              <FiUser />
            </NavMenuItem>
            <NavMenuItem>
              <FiShoppingCart />
            </NavMenuItem>
          </NavMenu>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;

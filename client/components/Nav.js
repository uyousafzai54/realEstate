import Link from 'next/link';

import {
  Header,
  Styledlink,
  Navmenu,
  NavItems,
  NavLink,
} from '../styles/HomeStyles';

const Nav = () => (
  <Header>
    <Navmenu class="nav-menu">
      <ul class="unordered">
        <NavItems class="active">
          <NavLink className="active" href="#intro">
            Home
          </NavLink>
        </NavItems>
        <NavItems>
          <NavLink className="active">
            <Link href="Makelistings">
              <Styledlink>Listings</Styledlink>
            </Link>
          </NavLink>
        </NavItems>
        <NavItems>
          <NavLink className="active" href="#services">
            Services
          </NavLink>
        </NavItems>
        <NavItems>
          <NavLink className="active" href="#inspiration">
            Inspiration
          </NavLink>
        </NavItems>
        <NavItems>
          <NavLink className="active" href="#faq">
            FAQ
          </NavLink>
        </NavItems>
      </ul>
    </Navmenu>
  </Header>
);

export default Nav;

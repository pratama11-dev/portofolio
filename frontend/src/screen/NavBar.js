import React from 'react';
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <header className="row">
          <div className="container">
            <nav className="menu">
              <li>
                <Link 
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <p>HOME</p>
                </Link>
              </li>
              <li>
                <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <p>ABOUT ME</p>
                </Link>
              </li>
              <li>
                <Link 
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <p>PORTFOLIO</p>
                </Link>
              </li>
              <li>
                <Link 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    <p>CONTACT ME</p>
                </Link>
              </li>
            </nav>
          </div>
        </header>
    );
}

export default NavBar;

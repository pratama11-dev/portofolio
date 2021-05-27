import React from 'react';
import { Link } from "react-scroll";
import {
    InstagramOutlined,
    GithubOutlined
} from '@ant-design/icons';

const FooterBar = () => {
    return (
        <footer>
          <div className="footer">
            <div className="small-container">
              <div className="row">
                <div className="footer-col-2">
                  <p>Adithya Nuz Pratam Putra</p>
                  <p>089630143581</p>
                  <p>adithyanuzpratamaputra@gmail.com</p>
                </div>
                <div className="footer-col-1">
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
                </div>
                <div className="footer-col-1">
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
                </div>
                <div className="footer-col-2">
                    <p>Find me at :</p>
                    <div className="follow">
                      <a href="https://www.instagram.com/adithyanuzpratama/">
                        <InstagramOutlined />
                        <br />
                      </a>
                      <a href="https://github.com/pratama11-dev">
                        <GithubOutlined />
                        <br />
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2021 - All Rights Reserved</p>
            </div>
          </div>
        </footer>
    );
}

export default FooterBar;

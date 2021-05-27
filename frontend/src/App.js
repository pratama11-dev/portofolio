import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import {
  InstagramOutlined,
  GithubOutlined
} from '@ant-design/icons';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="container">
            <nav className="menu">
              <li>
                <Link to="/"><p>HOME</p></Link>
              </li>
              <li>
                <Link to="/"><p>ABOUT ME</p></Link>
              </li>
              <li>
                <Link to="/"><p>PORTFOLIO</p></Link>
              </li>
              <li>
                <Link to="/"><p>CONTACT ME</p></Link>
              </li>
            </nav>
          </div>
        </header>

        <main>
          <Route path="/" exact={true} component={HomeScreen} />
        </main>

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
                    <Link to="/"><p>HOME</p></Link>
                  </li>
                  <li>
                    <Link to="/"><p>ABOUT ME</p></Link>
                  </li>
                </div>
                <div className="footer-col-1">
                  <li>
                    <Link to="/"><p>PORTFOLIO</p></Link>
                  </li>
                  <li>
                    <Link to="/"><p>CONTACT ME</p></Link>
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
      </div>
    </BrowserRouter>
  );
}

export default App;

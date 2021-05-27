import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import NavBar from './screen/NavBar';
import FooterBar from './screen/FooterBar';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar />

        <main>
          <Route path="/" exact={true} component={HomeScreen} />
        </main>

        <FooterBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

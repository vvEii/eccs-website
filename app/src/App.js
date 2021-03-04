//import logo from './logo.svg';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Programs from './pages/Programs';
import ContactUs from './pages/ContactUs';
import TakeAction from './pages/TakeAction';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div className="bg-no-repeat bg-center h-5/6" style={{background: `url('https://images.squarespace-cdn.com/content/5d375649e2ffc000016e0aec/1566216421263-WABITDNT9SVT641I149X/20140302_Trade%2B151_0503.jpg?format=2500w&content-type=image%2Fjpeg')` }}>
      asd
      </div> */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/programs' component={Programs} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/take-action' component={TakeAction} />
      </Switch>
    </div>
  );
}

export default App;

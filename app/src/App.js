//import logo from './logo.svg';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Programs from './pages/Programs';
import ContactUs from './pages/ContactUs';
import GetInvolved from './pages/GetInvolved';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgramDetails from './pages/ProgramDetails';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/programs' component={Programs} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/get-involved' component={GetInvolved} />
        <Route path='/program-details' component={ProgramDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

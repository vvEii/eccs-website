//import logo from './logo.svg';
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import MobileMenu from './components/MobileMenu';
import About from './pages/About';
import Blog from './pages/Blog';
import Programs from './pages/Programs';
import ContactUs from './pages/ContactUs';
import GetInvolved from './pages/GetInvolved';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgramDetails from './pages/ProgramDetails';
import Donate from './pages/Donate';
import Partnership from './pages/Partnership';
import VolunteerEmployment from './pages/VolunteerEmployment';
import BlogDetail from './pages/BlogDetail';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='App'>
      {!isOpen && <Navbar toggle={toggle} />}
      {isOpen && <MobileMenu toggle={toggle} />}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/programs' component={Programs} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/get-involved' exact component={GetInvolved} />
        <Route path='/program-details/' component={ProgramDetails} />
        <Route path='/blog-details/' component={BlogDetail} />
        <Route path='/get-involved/donate' exact component={Donate} />
        <Route path='/get-involved/partnership' exact component={Partnership} />
        <Route
          path='/get-involved/volunteer-employment'
          exact
          component={VolunteerEmployment}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

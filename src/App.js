import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Factura from './pages/Factura';
import FooterComponent from './components/footer/FooterComponent';
import DistributorAccess from './pages/DistributorAccess';
import ChatComponent from './components/chatComponent/ChatComponent';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Services" exact component={Services}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/DistributorAccess" exact component={DistributorAccess}/>
        <Route path="/Factura" exact component={Factura}/>
      </Switch>
      <ChatComponent/>
      <FooterComponent/>
    </Router>
  );
}

export default App;

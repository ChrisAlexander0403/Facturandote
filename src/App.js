import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FooterComponent from './components/footer/FooterComponent';
import DistributorAccess from './pages/DistributorAccess';
// import ChatComponent from './components/chatComponent/ChatComponent';
import Payment from './pages/Payment';
import Questions from './pages/Questions';
import Tutorials from './pages/Tutorials';
import ScrollToTop from './hooks/ScrollToTop';
import Error404 from './pages/Error404';
import Manual from './pages/Manual';

function App() {
  useEffect(() => {
    window.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }
  },[])
  return (
    <Router>
      <NavBar/>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Services" exact component={Services}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/DistributorAccess" exact component={DistributorAccess}/>
          <Route path="/Payment/:id" exact component={Payment}/>
          <Route path="/Questions" exact component={Questions}/>
          <Route path="/Tutorials" exact component={Tutorials}/>
          <Route path="/Tutorials/Manual" exact component={Manual}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </ScrollToTop>
      {/* <ChatComponent/> */}
      <FooterComponent/>
    </Router>
  );
}

export default App;

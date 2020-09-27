import React from 'react';
import LandingPromoMen from './LandingPromoMen';
import LandingPromoWomen1 from './LandingPromoWomen1';
import LandingPromoWomen2 from './LandingPromoWomen2';
import Thanks from './Thanks';

import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">


      <Router>
      <div className="logo"></div>

        <nav >
          <ul className="nav">
            
            <Link className="button" to="/offer-man">offer-man</Link>
            <Link className="button" to="/offer-women1">Offer Women 1</Link>
            <Link className="button" to="/offer-women2">Offer Women 2</Link>
            <Link className="button" to="/thanks">thanks</Link>
            
          </ul>
        </nav>
        <Switch>
          <Route path="/offer-man">
            <LandingPromoMen />
          </Route>
          <Route path="/offer-women1">
            <LandingPromoWomen1 />
          </Route>
          <Route path="/offer-women2">
            <LandingPromoWomen2 />
          </Route>
          <Route path="/thanks">
            <Thanks />
          </Route>
          
        </Switch>
      </Router>
      
     
       
    </div>
  );
}

export default App;

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
        <nav >
          <ul className="nav">
            <button>
              <Link to="/offer-man">offer-man</Link>
            </button>
            <button>
              <Link to="/offer-women1">Offer Women 1</Link>
            </button>
            <button>
              <Link to="/offer-women2">Offer Women 2</Link>
            </button>
            <button>
              <Link to="/thanks">thanks</Link>
            </button>
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

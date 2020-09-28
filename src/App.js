import React from 'react';
import LandingPromoMen from './LandingPromoMen';
import LandingPromoWomen1 from './LandingPromoWomen1';
import LandingPromoWomen2 from './LandingPromoWomen2';
import Thanks from './Thanks';
import Home from './Home';

import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">

           

        <Router>

            <Route path="/" exact>
                <Home />
            </Route>
          
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

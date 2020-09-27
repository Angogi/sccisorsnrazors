import React from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import  "./Home.css"

function Home() {
    return (
        <Router>
        <div className="home">

            <div className="logo"></div>
            
            <nav>
                <ul className="nav">
                
                    <Link className="button" to="/offer-man">offer-man</Link>
                    <Link className="button" to="/offer-women1">Offer Women 1</Link>
                    <Link className="button" to="/offer-women2">Offer Women 2</Link>
                    <Link className="button" to="/thanks">thanks</Link>
                    
                </ul>
            </nav>
            
        </div>
        </Router>
    )
}

export default Home

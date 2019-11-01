import React from 'react';
import {
  BrowserRouter,
  Route, 
  Switch
} from 'react-router-dom';

import Header from './Header'
import Home from './Home';
import About from './About';
import Players from './Players';
import Teams from './Teams';
import NotFound from './NotFound';
import FeaturedPlayer from './FeaturedPlayer';

const App = () => (
  <BrowserRouter>
  <div className="container">
    <Header />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route exact path="/players" component={Players} />
    <Route path="/players/:team/:name" component={FeaturedPlayer} />
    <Route path="/teams" component={Teams} /> 
    <Route component={NotFound} />
    </Switch>
  </div>
  </BrowserRouter>
);
// this is the comment

export default App;
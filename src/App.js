import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Privacy from './components/Privacy/Privacy';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

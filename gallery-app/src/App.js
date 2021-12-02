import {React, Router, Route} from 'react';
import ReactDOM from 'react-dom';
// import Gallery from './components/Gallery'; 
import Welcome from './components/Welcome';


import List from './components/List';
import NavTabs from './components/NavTabs';
import JSXVariables from './components/JSXVariables';
// import Alert from './components/Alert';
import Display from "./components/Display";
import Counter from './components/Counter';
import Thermostat from './components/Thermostat';
import SearchResultContainer from './components/SearchResultContainer';
// import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
// import Carousel from 'react-elastic-carousel';
// import Item from "./Item";

import users from './users';
import snacks from './snacks';
import Greeting from './components/Greeting';




function App() {
  return (
  <Router>
  <div>
    <Route exact path="/">
        <Home />
    </Route>
    {/* <Route exact path="/login">
        <Login />
    </Route>
   <Route exact path="/Welcome">
        <NavTabs />
        <Welcome />
    </Route> */}
    {/* <Route exact path="/About">
        <Greeting />
        <List users={users} snacks={snacks} />
        <JSXVariables />
    </Route>
    <Route exact path="/Dashboard">
        <Thermostat />
        <Counter />
        <Display />
        <SearchResultContainer />
    </Route> */}
      {/* <Alert /> */}
  </div>
  </Router>
  
  );
}

export default App


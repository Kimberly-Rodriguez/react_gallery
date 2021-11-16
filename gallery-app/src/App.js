import React from 'react';
// import Gallery from './components/Gallery'; 
import Welcome from './components/Welcome';
import List from './components/List';
import Nav from './components/Nav';
import JSXVariables from './components/JSXVariables';
import Alert from './components/Alert';
import Display from "./components/Display";
import Counter from './components/Counter';
import Thermostat from './components/Thermostat';
import SearchResultContainer from './components/SearchResultContainer';

import Home from "./pages/Home";
// import Carousel from 'react-elastic-carousel';
// import Item from "./Item";

import users from './users';
import snacks from './snacks';
import Greeting from './components/Greeting';
import Form from './components';



export default function App() {
  return (
  <div>
    <Home />
    <Nav />
    <Welcome />
    <Form />
    <Alert />
    <Greeting />
    <List users={users} snacks={snacks} />
    <JSXVariables />
    <Thermostat />
    <Counter/>
    <Display />
    <SearchResultContainer />
  </div>
  );
}


import React from 'react';
import Gallery from './components/Gallery'; 
import Welcome from './components/Welcome';
import List from './components/List';
import Nav from './components/Nav';
import JSXVariables from './components/JSXVariables';

import users from './users';
import snacks from './snacks';

export default function App() {
  return (
  <div>
    <Nav />
    <Welcome /> 
    <Gallery />
    <List users={users} snacks={snacks} />
    <JSXVariables />
  </div>
  );
}




//I will be adding my seeds and models 
// the queires and 
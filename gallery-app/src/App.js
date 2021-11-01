import React from 'react';
import Gallery from './components/Gallery'; 
import Welcome from './components/Welcome';
import List from './components/List';

import users from './users';

export default function App() {
  return (
  <div>
    <Welcome /> 
    <Gallery />
    <List users={users} />
  </div>
  );
}




//I will be adding my seeds and models 
// the queires and 
import React from 'react';
import Gallery from './components/Gallery'; 
import Welcome from './components/Welcome';
import List from './components/List';
import Nav from './components/Nav';
import JSXVariables from './components/JSXVariables';
import Alert from './components/Alert';

import users from './users';
import snacks from './snacks';

const message = 'Invalid user id or password';
const alertType = 'danger';



export default function App() {
  return (
  <div>
    <Nav />
    <Welcome /> 
    <Gallery />
    <List users={users} snacks={snacks} />
    <JSXVariables />
    <Alert type={alertType} message={message}/>
  </div>
  );
}


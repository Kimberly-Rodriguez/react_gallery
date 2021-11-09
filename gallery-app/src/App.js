import React from 'react';
// import Gallery from './components/Gallery'; 
import Welcome from './components/Welcome';
import List from './components/List';
import Nav from './components/Nav';
import JSXVariables from './components/JSXVariables';
import Alert from './components/Alert';
import Display from "./components/Display";
import Counter from './components/Counter';


// import Carousel from 'react-elastic-carousel';
// import Item from "./Item";

import users from './users';
import snacks from './snacks';
import Greeting from './components/Greeting';

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

export default function App() {
  return (
  <div>
    <Nav />
    <Greeting/>
    <Welcome />
    {/* <Gallery Carousel={Carousel} /> */}
    <List users={users} snacks={snacks} />
    <JSXVariables />
    <Counter/>
    <Alert />
    <Display />

    {/* <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </> */}
  
  </div>
  );
}


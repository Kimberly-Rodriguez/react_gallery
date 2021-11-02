import React from 'react';

const name = 'Kimberly';
const num1 = 1;
const num2 = 2;

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1> Random Facts: </h1>
          <h3>My name is {name} but you can call me ... The JSX Boss!</h3>
          <hr />
          <h2>I can do math:{num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
          </h2>
          <h2>I can even reverse my name: {name.split('').reverse()}</h2>
          <h2>my name has a total of {name.length} characters </h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
import React, {useState , useEffect } from 'react';

function Thermostat() {
  const [temp, setTemp] = useState(75);

  useEffect(() => {
    document.title = `${temp}° Fahrenheit`;
  });

  const increaseTemp = () => {
    setTemp(temp +1);
    document.title = `${temp}° Fahrenheit`;
  };

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  

}
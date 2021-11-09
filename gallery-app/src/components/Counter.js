import React, { useState } from 'react';
import CardBody from './CardBody';

export default function Counter() {
  
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="card text-center">
    <div className="card-header bg-primary text-white"> Click Counter! </div>
    <CardBody
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      />
    </div>
  );
}






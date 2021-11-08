import React, {useState} from 'react';

export default function Greeting() {
const [greeting, setGreeting] = useState('Kimberly Rodriguez')

return (
  <div className="card text-center">
    <div className="card-header bg-primary text white">
     
    </div>
    <div className="card-body">
      <p className="card-text" style={{fontSize: '50px'}}>
        {greeting}
      </p>
    </div>
  </div>
);
}
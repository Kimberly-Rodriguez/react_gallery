import React, {useState} from 'react';

export default function Greeting() {
const [greeting, setGreeting] = useState('Kimberly Rodriguez')
const [group, setGroup] = useState(["John", "Grace", "Jared"]);

return (
  <div className="card text-center">
    <div className="card-header bg-primary text white">
     
    </div>
    <div className="card-body">
      <p className="card-text" style={{fontSize: '50px'}}>
        {greeting}
      </p>
      <ul>
        {group.map((group) => (
         <li key={group.id}>{group}</li>
        ))}
        {/* <li>{group[1]}</li>
        <li>{group[2]}</li> */}
       
      </ul>
    </div>
  </div>
);
}
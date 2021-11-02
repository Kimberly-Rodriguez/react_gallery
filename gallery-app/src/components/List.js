import React from "react";

export default function List({users , snacks}) {
  return (
    <section className="container">
      <h1>Site Users:</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.login.uuid}>
            {`${user.name.first} ${user.name.last} (${user.login.username})`}
            </li>
        ))}
        </ul>
        
        <div>
        <h1>Below are some snacks I like to eat while coding:</h1>
        <ul className="list-group">
          {snacks.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        </div>
    </section>
  );
}
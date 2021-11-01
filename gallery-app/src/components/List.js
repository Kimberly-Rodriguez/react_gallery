import React from "react";

export default function List({users}) {
  return (
    <div className="container">
      <h1>Site Users:</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.login.uuid}>
            {`${user.name.first} ${user.name.last} (${user.login.username})`}
            </li>
        ))}
      </ul>
    </div>
  );
}
import React from 'react';


function Alert() {

  const message = 'correct password';
  const alertType = 'success';

  // const message = 'Invalid user id or password';
  // const alertType = 'danger';  

  return (
    <div className={`alert alert-${alertType || 'success'}`} role="alert">
      {message}
    </div>
  );
}

export default Alert;
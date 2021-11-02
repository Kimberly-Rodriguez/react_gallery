import React from 'react';

function Alert(props) {
  console.log(props);
  return (
    <div className={`alert alert-${props.type || 'success'}`} role="alert">
      {props.message}
    </div>
  );
}

export default Alert;
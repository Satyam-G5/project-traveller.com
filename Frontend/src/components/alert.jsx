import React from 'react';

const alert = ({ message, type }) => {
  return (
    <div className={`alert ${type} bg-green-500 p-2 rounded-md mt-2`}>
      {message}
    </div>
  );
};

export default alert;


import React from 'react';


function Button({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
}

export default Button; 

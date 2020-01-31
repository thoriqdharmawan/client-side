import React from 'react';

const MyButton = ({onClick, children}) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
};

export default MyButton;
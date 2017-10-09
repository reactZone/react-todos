import React from 'react';

export const Link = ({ active, children, onClick }) => {
  //解构入参对象
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};
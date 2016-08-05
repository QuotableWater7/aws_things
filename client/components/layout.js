import React from 'react';

let child_index = 0;

export default ({ children }) => {
  return (
    <div>
      {children.map(renderChild)}
    </div>
  );
};

const renderChild = (child) => {
  return (
    <div key={`child-${child_index++}`}>
      {child}
    </div>
  );
};

import React from 'react';

export default ({ display, archive }) => {
  if (!display) { return null; }

  return (
    <div onClick={archive}>
      Archive!
    </div>
  );
};

import React from 'react';

const ContentEditable = ({ children }) => {
  return <div contentEditable='true'>{children}</div>;
};

export default ContentEditable;

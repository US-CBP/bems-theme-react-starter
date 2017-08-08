import React from 'react';

const MobileTearSheet = ({ children }) => {
  return (
    <div style={{ border: '1px solid #cccccc', maxWidth: '360px' }}>
      {children}
    </div>
  );
};
export default MobileTearSheet;

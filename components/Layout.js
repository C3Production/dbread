import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <NavBar />
        <Notify />
        <Modal /> */}
      <div className='container'>{children}</div>
    </div>
  );
};

export default Layout;

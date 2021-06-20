import NavBar from '@components/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* <Notify />
        <Modal /> */}
      <div className='container'>{children}</div>
    </>
  );
};

export default Layout;

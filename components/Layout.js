import NavBar from '@components/NavBar';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <NavBar />
      {/* <Notify />
        <Modal /> */}
      <div className='page'>
        <div className='container'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Footer from 'components/footer/Footer';
import { Header } from './LayoutStyled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

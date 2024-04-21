import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

import { Header } from './LayoutStyled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Outlet />
    </>
  );
};

export default Layout;

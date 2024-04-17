import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

import { Header, ContainerLayout } from './LayoutStyled';

const Layout = () => {
  return (
    <>
      <Header>
        <ContainerLayout>
          <Navigation />
        </ContainerLayout>
      </Header>

      <Outlet />
    </>
  );
};

export default Layout;

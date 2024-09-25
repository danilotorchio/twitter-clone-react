import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <>
      <Header />

      <Content>
        <Outlet />
      </Content>

      <Footer />
    </>
  );
};

export { Layout };

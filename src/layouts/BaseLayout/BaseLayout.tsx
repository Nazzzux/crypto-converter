import { Header } from 'components/Header';
import { Container } from 'components/ui/Container';
import { Outlet } from 'react-router-dom';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="content paddingBottom">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

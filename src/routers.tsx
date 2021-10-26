import { Router } from '@reach/router'
import { Layout } from './components/layout/layout';
import { Home } from './views/home';

export function Routers() {

  return (
    <Layout>
      <Router>
        <Home path='/' />
      </Router>
    </Layout>
  );
};
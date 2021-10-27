import { Router } from '@reach/router'
import { Layout } from './components/layout/layout';
import { Home } from './views/home';
import { Products } from './views/products';

export function Routers() {

  return (
    <Layout>
      <Router>
        <Home path='/' />
        <Products path='/products' />
      </Router>
    </Layout>
  );
};
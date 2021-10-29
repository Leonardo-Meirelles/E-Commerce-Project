import { Router } from '@reach/router';
import { Layout } from './components/layout/layout';
import { Home } from './views/home';
import { SearchProduct } from './views/product';


export function Routers() {

  return (
    <Layout>
      <Router>
        <Home path='/' />
        <SearchProduct path='/product' />
      </Router>
    </Layout>
  );
};
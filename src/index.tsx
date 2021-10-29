import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './styles/globalStyles';
import { Routers } from './routers';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <Provider store={store}>

    <Routers />
    <GlobalStyles />
    <Toaster />

  </Provider>,
  document.getElementById('root')
);
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './styles/globalStyles';
import { Routers } from './routers';

ReactDOM.render(
  <Provider store={store}>

    <Routers />
    <GlobalStyles />

  </Provider>,
  document.getElementById('root')
);
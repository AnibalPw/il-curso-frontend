import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRoute';

import { store } from './store/store';

function CursosApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default CursosApp;

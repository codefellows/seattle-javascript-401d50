import './App.css';
import Header from './components/header/header';
import Storefront from './components/storefront/storefront';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Storefront></Storefront>
    </Provider>
  );
}

export default App;

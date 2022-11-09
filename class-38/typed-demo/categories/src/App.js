import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Categories from './components/categories/Categories';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Categories />
      </div>
    </Provider>
  );
}

export default App;

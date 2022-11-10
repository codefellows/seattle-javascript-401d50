import { Provider } from 'react-redux';
import store from './rtk-store';
import People from './components/People.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <People />
      </div>
    </Provider>
  );
}

export default App;

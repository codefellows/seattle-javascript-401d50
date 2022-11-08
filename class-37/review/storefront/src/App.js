import { Provider } from 'react-redux';
import store from './store/store';

import Main from './components/Main/main';
import './App.css';

function App()
{
  return (
    <Provider store={ store }>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;

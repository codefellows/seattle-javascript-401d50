import { Provider } from 'react-redux';
import store from './store';
import CandidateList from './components/CandidateList/CandidateList';
import VoteForm from './components/VoteForm/VoteForm';
import './App.css';

function App() {
  return (
    // pass a store into the provider
    <Provider store={store}>
      <div className="App">
        <CandidateList />
        <VoteForm />
      </div>
    </Provider>
  );
}

export default App;

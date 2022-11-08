import { Provider } from 'react-redux';
import store from './store';
import VoteForm from './components/voteForm/VoteForm.jsx';
import CandidateDisplay from './components/candidateDisplay/CandidateDisplay';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CandidateDisplay />
        <VoteForm />
      </div>
    </Provider>
  );
}

export default App;

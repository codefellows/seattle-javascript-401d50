import AuthProvider from './context/auth.js';
import Login from './context/Login.jsx';
import IsAuthorized from './context/IsAuthorized.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
        <IsAuthorized capability="create">
          <p>You should be logged In!</p>
        </IsAuthorized>
        <div>
          <p>I am a footer</p>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

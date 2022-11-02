import { useState, useContext } from 'react';
import { AuthContext } from './auth.js';
import { When } from 'react-if';

function Login() {

  let context = useContext(AuthContext);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(username, password)
  }

  return (
    <div>
      <When condition={context.loggedIn}>
        <button onClick={context.logout}>Logout</button>
      </When>

      <When condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Login</button>
        </form>
      </When>
    </div>
  )
}

export default Login;

import { useState, createContext } from 'react';
import jwt_decode from 'jwt-decode';

// mock db of users
const testUsers = {
  Administrator: {
    password: 'admin',
    name: 'Administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  Editor: {
    password: 'editor',
    name: 'Editor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
  },
  Writer: {
    password: 'writer',
    name: 'Writer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
  },
  User: {
    password: 'user',
    name: 'User',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
  },
}

export const AuthContext = createContext();

function AuthProvider(props) {

  let [loggedIn, setLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  let [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  // the ability to find a user by username and password
  const login = (username, password) => {
    // mocking the login process.
    const User = testUsers[username];
    if (User && User.password === password) {
      let capabilities = jwt_decode(User.token).capabilities;
      User.capabilities = capabilities;
      delete User.password;
      setUser(User);
      setLoggedIn(true);
      setError(null);
    } else {
      setUser({});
      setLoggedIn(false);
      setError('invalid credentials');
    }
  }

  // removed current user and sets logged in to false
  const logout = () => {
    setUser({});
    setLoggedIn(false);
    setError(null);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, user, error, login, logout, can }}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthProvider;

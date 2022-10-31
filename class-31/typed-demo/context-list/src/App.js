import logo from './logo.svg';
import './App.css';
import ListProvider from './context/ListContext';
import ThemeProvider from './context/ThemeContext';
// import List from './components/List';
import ClassList from './components/ClassList.jsx';
import AppBar from './components/AppBar.jsx';

function App() {
  return (
    <ListProvider>
      <ThemeProvider>
        <AppBar />
        {/* anything in here is represented in the provider as props.children */}
        <div className="App">
          {/* <List /> */}
          <ClassList />
        </div>
      </ThemeProvider>
    </ListProvider>
  );
}

export default App;

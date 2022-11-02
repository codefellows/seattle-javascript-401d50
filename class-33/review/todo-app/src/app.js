import React from 'react';
import SettingsProvider from './context/settings.js';
import ToDo from './components/todo.jsx';
import './styles/app.css';


export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    );
  }
}
import React from 'react';
import './App.scss';
import Todo from './components/Todo';
import SettingsProvider from './context/settings';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Todo />
      </SettingsProvider>
    );
  }
}

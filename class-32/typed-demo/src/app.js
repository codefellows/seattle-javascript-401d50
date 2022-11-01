import React from 'react';

import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings.js';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    );
  }
}

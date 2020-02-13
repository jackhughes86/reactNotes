/**
 * @flow
 */
import type { Node } from 'react';

import React from 'react';
import './App.css';
import NotesContainer from './NotesContainer';

function App(): Node {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Notebook</h1>
        <h5>Click New to begin taking notes!</h5>
        <NotesContainer />
      </header>
    </div>
  );
}

export default App;

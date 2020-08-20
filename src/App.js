/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import ViewA from './view/viewA';
// import ViewB from './view/viewB';
import { ContextAProvider } from './context/ContextA';

function App() {
  return (
    <ContextAProvider>
      <div className="App-header">
        <ViewA />
        {/* <ViewB /> */}
      </div>
    </ContextAProvider>

  );
}

export default App;

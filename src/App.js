/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import View1 from './view/view1';
import View2 from './view/view2';
import View3 from './view/view3';
import View4 from './view/view4';
import { ContextAProvider } from './context/ContextA';
import { ContextBProvider } from './context/ContextB';

function App() {
  return (
    <ContextAProvider>
      <ContextBProvider>
        <div className="App-header">
          <div className="Container-header">
            <View1 />
            <View2 />
          </div>
          <div className="Container-header">
            <View3 />
            <View4 />
          </div>
        </div>
      </ContextBProvider>
    </ContextAProvider>

  );
}

export default App;

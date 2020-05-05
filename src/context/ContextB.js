/* eslint-disable valid-typeof */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';

const StateContextB = React.createContext();
const MutatorContextB = React.createContext();

function ContextBProvider(props) {
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');

  return (
    <StateContextB.Provider value={{ surname, gender }}>
      <MutatorContextB.Provider value={{ setSurname, setGender }}>
        {props.children}
      </MutatorContextB.Provider>
    </StateContextB.Provider>
  );
}

function useContextBState() {
  const stateContextB = useContext(StateContextB);
  if (typeof stateContextB === undefined) {
    throw new Error('stateContextB must be used within a ContextBProvider');
  }
  return stateContextB;
}

function useContextBMutator() {
  const mutatorContextB = useContext(MutatorContextB);
  if (typeof setCount === undefined) {
    throw new Error('mutatorContextB must be used within a useContextBState');
  }
  return mutatorContextB;
}

export { ContextBProvider, useContextBState, useContextBMutator };

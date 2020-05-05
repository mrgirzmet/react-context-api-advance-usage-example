/* eslint-disable valid-typeof */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';

const StateContextA = React.createContext();
const MutatorContextA = React.createContext();

function ContextAProvider(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  return (
    <StateContextA.Provider value={{ name, email, companyName }}>
      <MutatorContextA.Provider value={{ setName, setEmail, setCompanyName }}>
        {props.children}
      </MutatorContextA.Provider>
    </StateContextA.Provider>
  );
}

function useContextAState() {
  const stateContextA = useContext(StateContextA);
  if (typeof stateContextA === undefined) {
    throw new Error('useContextAState must be used within a useContextAProvider');
  }
  return stateContextA;
}

function useContextAMutator() {
  const mutatorContextA = useContext(MutatorContextA);
  if (typeof mutatorContextA === undefined) {
    throw new Error('useContextAMutator must be used within a useContextAState');
  }
  return mutatorContextA;
}

export { ContextAProvider, useContextAState, useContextAMutator };

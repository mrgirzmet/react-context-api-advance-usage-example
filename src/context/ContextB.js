/* eslint-disable valid-typeof */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';

const faker = require('faker');

const StateContextB = React.createContext();
const MutatorContextB = React.createContext();

const prepareDummyData = (dataSize) => {
  const treeData = [];
  for (let i = 0; i < dataSize; i += 1) {
    const name = faker.name.firstName();
    treeData.push(
      {
        title: name,
        children: [],
      },
    );
  }
  return treeData;
};

function ContextBProvider(props) {
  const [treeDataB, setTreeDataB] = useState(prepareDummyData(10));
  return (
    <StateContextB.Provider value={{ treeDataB }}>
      <MutatorContextB.Provider value={{ setTreeDataB }}>
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

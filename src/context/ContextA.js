/* eslint-disable valid-typeof */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import useInterval from '@use-it/interval';

const faker = require('faker');

const DUMMY_DATA_SIZE = 50000;
const DELAY = 50;


const StateContextA = React.createContext();
const MutatorContextA = React.createContext();

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
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;


function ContextAProvider(props) {
  const [treeDataA, setTreeDataA] = useState(prepareDummyData(DUMMY_DATA_SIZE));

  useInterval(() => {
    const randomNumber = getRndInteger(0, treeDataA.length);
    treeDataA[randomNumber] = {
      title: `${treeDataA[randomNumber].title} ad`,
      children: [],
    };
    setTreeDataA([...treeDataA]);
  }, DELAY);

  return (
    <StateContextA.Provider value={{ treeDataA }}>
      <MutatorContextA.Provider value={{ setTreeDataA }}>
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

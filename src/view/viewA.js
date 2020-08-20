/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SortableTree from 'react-sortable-tree';
import { useContextAMutator, useContextAState } from '../context/ContextA';
import 'react-sortable-tree/style.css';

const ViewA = () => {
  const { setTreeDataA } = useContextAMutator();
  const { treeDataA } = useContextAState();

  return (
    <div style={{ flexGrow: 1 }}>
      <SortableTree
        treeData={treeDataA}
        onChange={(treeData) => { setTreeDataA([...treeData]); }}
      />
    </div>
  );
};
export default ViewA;

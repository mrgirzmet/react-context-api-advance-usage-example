/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */

import React, { useEffect } from 'react';
import SortableTree from 'react-sortable-tree';
import { useContextBState, useContextBMutator } from '../context/ContextB';
import 'react-sortable-tree/style.css';

const ViewB = React.memo(() => {
  const { setTreeDataB } = useContextBMutator();
  const { treeDataB } = useContextBState();
  useEffect(() => {
    console.log('View2 mounted');
  }, []);
  useEffect(() => {
    console.log('View2 has rendered');
  });
  return (
    <div style={{ flexGrow: 1 }}>
      <SortableTree
        treeData={treeDataB}
        onChange={(treeData) => { setTreeDataB(treeData); }}
      />
    </div>
  );
});
export default ViewB;

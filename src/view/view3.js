/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */

import React, { useEffect } from 'react';
import { useContextAState } from '../context/ContextA';
import { useContextBState } from '../context/ContextB';

const RenderMyComponent = React.memo(({ name, surname }) => {
  useEffect(() => {
    console.log('View3 mounted');
  }, []);
  useEffect(() => {
    console.log('View3 has rendered');
  });
  return (
    <div className="alert alert-primary view-horizontal">
      <h4>Name and Surname</h4>
      <strong>{`${name} ${surname}`}</strong>
    </div>
  );
});

// If we dont use React.memo here, there will be unnecessary re-renders
const View3 = () => {
  const { name } = useContextAState();
  const { surname } = useContextBState();
  return (<RenderMyComponent name={name} surname={surname} />);
};


export default View3;

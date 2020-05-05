/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useContextAState } from '../context/ContextA';
import { useContextBState } from '../context/ContextB';

const RenderMyComponent = React.memo(({ email, gender }) => {
  useEffect(() => {
    console.log('View4 mounted');
  }, []);
  useEffect(() => {
    console.log('View4 has rendered');
  });
  return (
    <div className="alert alert-primary view-horizontal">
      <h4>Email and Gender Information</h4>
      <strong>{`${email} and ${gender}`}</strong>
    </div>
  );
});

const View4 = () => {
  const { email } = useContextAState();
  const { gender } = useContextBState();
  return (<RenderMyComponent email={email} gender={gender} />);
};
export default View4;

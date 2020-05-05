/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useContextAMutator, useContextAState } from '../context/ContextA';

const View1 = React.memo(() => {
  const { setName, setEmail, setCompanyName } = useContextAMutator();
  const { name, email, companyName } = useContextAState();
  useEffect(() => {
    console.log('View1 mounted');
  }, []);
  useEffect(() => {
    console.log('View1 has rendered');
  });
  return (
    <form className="view-horizontal ">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(event) => { setName(event.target.value); }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control form-control-lg"
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); }}
        />
        <small className="form-text text-muted">Your email will not ever be shared</small>
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          className="form-control form-control-sm"
          type="text"
          id="company"
          placeholder="Enter company name"
          value={companyName}
          onChange={(event) => { setCompanyName(event.target.value); }}
        />
      </div>
    </form>
  );
});
export default View1;

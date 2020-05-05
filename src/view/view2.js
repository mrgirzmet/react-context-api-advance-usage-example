/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */

import React, { useEffect } from 'react';
import { useContextBState, useContextBMutator } from '../context/ContextB';

const View2 = React.memo(() => {
  const { setSurname, setGender } = useContextBMutator();
  const { surname, gender } = useContextBState();
  useEffect(() => {
    console.log('View2 mounted');
  }, []);
  useEffect(() => {
    console.log('View2 has rendered');
  });
  return (
    <form className="view-horizontal ">
      <div className="form-group">
        <label htmlFor="name">Surname</label>
        <input
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter name"
          value={surname}
          onChange={(event) => { setSurname(event.target.value); }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" id="gender" value={gender} onChange={(event) => { setGender(event.target.value); }}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
    </form>
  );
});
export default View2;

import React, { useContext } from 'react';
// import ComC from './ComC';
import { FirstName, LastName } from '../App';
const ComB = () => {
  //fetching the passed value from the from the FirstName.Provider context
  const fname = useContext(FirstName);

  //fetching the passed value from the from the FirstName.Provider context
  const lname = useContext(LastName);
  return (
    <>
      <h1>This is Component-B</h1>
      <h3>
        My name is {fname} {lname}
      </h3>
    </>
  );
};

export default ComB;

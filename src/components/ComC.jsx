import React from 'react';
import { FirstName, LastName } from '../App';
const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <>
                    <h1>This component is belong to Comp-C</h1>
                    <h3>
                      Hello , This is {fname} {lname}
                    </h3>
                  </>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;

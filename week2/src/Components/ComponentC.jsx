// ComponentC.js (assuming this is your ComponentC)
import React, { useContext } from 'react';
import UserContext from './ComponentA.jsx';



function ComponentC() {
    console.log(UserContext)
    
  const user = useContext(UserContext);
  console.log(user)

  return (<div><p>{user}fdsfdsfdsf</p></div>);
}

export default ComponentC;

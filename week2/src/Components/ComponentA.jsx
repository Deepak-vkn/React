import { createContext } from 'react';
export const UserContext = createContext(null);
import ComponentB from './ComponentB'



function ComponentA(){
    return(
      
             <UserContext.Provider value={{'f':1}}>
             <ComponentB></ComponentB>
            </UserContext.Provider>
              
        
    )
}
export default ComponentA
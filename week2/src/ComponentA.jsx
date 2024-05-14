import ComponentC from './ComponentC'
import { useContext } from 'react'
import { counttracker } from './App'
function ComponentA(){
    const count=useContext(counttracker)

    const name='deepak'
    return (
        <><p>count is:{count.counter}</p>
        <button onClick={()=>count.dispatcher('INCREMENT')}>increment</button>
        <button onClick={()=>count.dispatcher('DECREMENT')}>decrement</button>
      
        <ComponentC></ComponentC>
     
        

        </>
      
    )
}

export default ComponentA
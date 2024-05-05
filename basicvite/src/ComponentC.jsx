import React,{useContext} from "react"
import { Usercontext } from "./ComponentA"
function ComponentC(){
    const user=useContext(Usercontext)


    return(
        <div className="c">
            
            <p>componentc</p>
            <p>`{user}`</p>
        </div>
    )
}
export default ComponentC
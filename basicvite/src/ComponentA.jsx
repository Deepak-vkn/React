import React,{useState,useContext, createContext} from "react"
import ComponentB from "./ComponentB"
export const Usercontext=createContext()
function ComponentA(){

    const[user,setuser]=useState('deepak')


    return(
        <div className="a">
           
            <p>componenta</p>
            <Usercontext.Provider value={user}>
            <ComponentB/>
            </Usercontext.Provider>
        </div>
    )
}
export default ComponentA
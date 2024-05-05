import React,{useState,useEffect} from 'react'


function Digitalclock(){

    const [time,setTime]=useState(new Date())

    useEffect(()=>{

        setInterval(() => {
            setTime(new Date() )
            
        }, 1000);
       
    })
  function timeintervel(){
    const hour=time.getHours()
    const minute=time.getMinutes()
    const sec=time.getSeconds()
    return `${hour}:${minute}:${sec}`
  }
    return(


        <p>{timeintervel()}</p>
    )
}
export default Digitalclock


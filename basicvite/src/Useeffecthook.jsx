import React,{useState,useEffect} from "react";


function Count(){

    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(10)

    useEffect(()=>{
        document.title=`count ${count}  count2 ${count2}`
    },[count,count2])
    function handleup(){

        setCount(count+1)
    }
    function handleup2(){

        setCount2(count2-1)
    }

    return(

        <><p>Count :{count}</p>
        <button onClick={handleup}>Up</button>
         <p>Count2 :{count2}</p>
         <button onClick={handleup2}>dwon</button>
         </>
        
    )

}

export default Count
import React,{useState} from 'react'


function Mycomponent(){

    let [name,setName]=useState('Guest')
    let [age,setAge]=useState(0)
    let [color,setColor]=useState('Red')
    const handlename=()=>{
        console.log('reched heere')
        setName('deepak')
    }
    const handleage=()=>{
        setAge(age+1)
    }
    const handlecolor=()=>{
        if(color=='Red'){
            setColor('Blue')
        }
        else{
            setColor('Red')
        }
    }

    return (

        <div>
            <p>Name:{name}</p>
            <button onClick={handlename}>Setname</button>
            <p>age:{age}</p>
            <button onClick={handleage}>setage</button>

          
            <div style={{width: '100px',backgroundColor:color, height:'50px'}}></div>
            <button onClick={handlecolor}>changecolor</button>

        </div>
    )


}
export default Mycomponent
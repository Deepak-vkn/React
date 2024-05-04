import React,{useState} from 'react'

function Mycar(){
    const [cars,setCars]=useState([])
    const [car,setCar]=useState('')
    const [year,setYear]=useState(new Date().getFullYear())
    const [model,setModel]=useState('')

    const handlecar=(event)=>{
        setCar(event.target.value)

    }
    const handleyear=(event)=>{
        setYear(event.target.value)
    }
    const handlemodel=(event)=>{
        setModel(event.target.value)
    }
    const addcar=()=>{
        const newcar={car:car,
            year:year
            ,model:model
        }
        setCars(c=>[...cars,newcar])
        setCar('')
        setYear(new Date().getFullYear())
        setModel('')

    }

    return(

        <div>
            <p>Car mangement</p>
            <ul>
                {cars.map((c,index)=>{
                  return  <li key={index}>{c.car} {c.year} {c.model}</li>
                })}
            </ul>
         
            <label> car  <input type='text' value={car} onChange={handlecar}></input></label>
            <label>  year <input type='number' value={year} onChange={handleyear}></input></label>
            <label>  model <input type='text' value={model} onChange={handlemodel}></input></label><br></br>
           <button onClick={addcar}>addcar</button>
            
        </div>
    )

}

export default Mycar
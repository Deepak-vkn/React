import React,{useState} from 'react'

function Mycomponent(){

    let [color,setColor]=useState('#FFFFFF')
    const handlecolor=(event)=>{
        setColor(event.target.value)
    }
    return(

        <div>
            <p>Color code: {color}</p>
          <label>select a color <input type="color" value={color} onChange={handlecolor}/></label> 
        </div>
    )

}

export default Mycomponent
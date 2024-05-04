import React,{useState} from 'react'

function Mycomponent(){
    let [text,setText]=useState('')
    let [comment,setComment]=useState('')
    let [payment,setpPayment]=useState('')
    let [delivery,setDelivery]=useState('')

    const handletext=(event)=>{
        setText(event.target.value)
    }
    const handlecomment=(event)=>{
        setComment(event.target.value)
    }
    const handlepayment=(event)=>{
        setpPayment(event.target.value)

    }
    const handleDelivery = (event) => {
        setDelivery(event.target.value);
    };



    return(
    <div>
        <input onChange={handletext}></input>
        <p>name is:{text}</p>

        <textarea onChange={handlecomment} placeholder='enter some comments'></textarea>
        <p>comment is: {comment}</p>
        <select value={payment} onChange={handlepayment}> 
            <option value=''>select</option>
            <option value='paytm'>paytm</option>
            <option value='googlepay'>googlepay</option>
            <option value='phonepay'>phonepay</option>
        </select>
        <p>payment is: {payment}</p>Delivered
        <label> <input type="radio" name="delivery" value="Delivered" onChange={handleDelivery} /></label>

       <label>Returned  <input type="radio" name="delivery" value="Returned" onChange={handleDelivery} />
        <p>Status  is: {delivery}</p></label>
       

    </div>)
}
export default Mycomponent
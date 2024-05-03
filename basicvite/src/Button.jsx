function Button(){

    let count=0
    const handleclick=(e)=>{
        e.target.style.display='none'
    }
    return(
        <button onClick={(e)=>handleclick(e)}>clickme</button>
    )
}
export default Button
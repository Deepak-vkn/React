import Student from "./Student"

function App() {

 return(
  <><Student name='Deepak' age={24}  isStudent={true}/>
  <Student name='Rahul' age={23}  isStudent={false}/>
  <Student name='Sneha' age={21}  isStudent={true}/>
  <Student name='Abi' age={24}  isStudent={false}/>
  <Student/>
  
  </>

)
  
}

export default App

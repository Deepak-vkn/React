import Fruit from "./Fruit"

function App() {
  const fruit=[{name:'orange',calory:10},{name:'apple',calory:13},{name:'banana',calory:1},{name:'pineaple',calory:8}]

    const veg=[{name:'pappaya',calory:10},{name:'tomato',calory:13},{name:'chilly',calory:1},{name:'potato',calory:8}]


 return(
  <> <Fruit  items={fruit} catagory='fruits'/>
  <Fruit  items={veg} catagory='vegitables'/>
</>
 
)
}

export default App

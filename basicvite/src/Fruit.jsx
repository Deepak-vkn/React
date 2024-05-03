import PropTypes from 'prop-types'



function Fruit(probs){
    const itemlist=probs.items
    const catagory=probs.catagory
   

    const listitems=itemlist.map(fruit=><li>{fruit.name}:&nbsp;{fruit.calory}</li>)
    return (<ol>{listitems}</ol>)
}

export default Fruit
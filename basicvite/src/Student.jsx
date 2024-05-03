import PropTypes from 'prop-types'

function Student(props){
    const loggedtrue=<h1 className='loggedtrue '>Welcome {props.name}</h1>
    const notlogged=<h1 className='loggedfalse'>please loggin</h1>


        if(props.islogged){
        return  loggedtrue
        }
        else{
            return notlogged
        }

}
Student.defaultProps={
    islogged:false,
    name:'Guest',
}
Student.propTypes={
    islogged:Boolean,
    name:String
}


export  default Student
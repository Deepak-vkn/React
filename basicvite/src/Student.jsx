import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className="student">
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.isStudent?'yes':'false'}</p>
        </div>
    )

}

Student.PropTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Student.defaultProps={
    name:'Guest',
    age:0,
    isStudent:false,
}
export  default Student
import Cardphoto from './assets/domino-164_6wVEHfI-unsplash.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={Cardphoto}></img>
            <h2>Card title</h2>
            <p>THis is a sample card </p>
            <p></p>
        </div>
    )
}

export default Card
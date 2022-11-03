import '../Styles/Card.css'
//import Peticion from '../Peticion'

function Card(props) {

        
        return(
            <div className='card'>
            <img   src={props.id}  alt="" />
            <div className='container'>
                <h3>DOGORS</h3>
                <p>THE BEST DOGS IN THE UNIVERSE</p>
                <button onClick={()=>{window.location.reload()}}>OTHER DOG</button>
            </div>
        </div>
    )
}
export default Card
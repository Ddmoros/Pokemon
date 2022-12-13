import {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../images/random.css"
import Container from 'react-bootstrap/Container';

const Random = (props) => {
const [pokemon, setPokemon] = useState({}) //store data about pokemon after fetch call
const [pokemonName, setPokemonName] = useState("")
const [pokemonImage, setPokemonImage] = useState("")
// const [userPokemon, setUserPokemon] = useState("")
const [pokemonType, setPokemonType] = useState("")
const [pokemonPopularAbility, setPokemonPopularAbility] = useState("")
const [displayDetail, setDisplayDetail] = useState(false)


useEffect(() => {
 getData()

}, [])


const getData = async() => {
    const number = Math.floor(Math.random() *900) //this function will get us a random number from 0 to 899
let results = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`) // `` ${} template literals
let data = await results.json() // make json for data manipulation
// newArr.push(data)
// setRandomPokemonArray(data)
        const name = data.forms[0].name
        const type = data.types[0].type.name
        const image =data.sprites.other.home.front_default
        const popularAbility = data.abilities[0].ability.name

console.log(image)
setPokemon(data)
setPokemonName(name)
setPokemonImage(image)
setPokemonType(type)
setPokemonPopularAbility(popularAbility)
}
const handleAdd = (pokemon)=>{
  // console.log(pokemon)
  props.addToFavorite(pokemon)
}


  return (
    <div> 
     

          <Container>
             <Row xs={1} md={3} className="g-4">
 <Col>
   <Card className='card-container'>
     <Card.Img className='card-image' variant="top" src={pokemonImage} />
     <Card.Body>
       <Card.Title>Name: {pokemonName}</Card.Title><hr></hr>
       <Card.Text>
         Type: {pokemonType}, <br></br>
         Popular Ability: {pokemonPopularAbility}<br></br>
       </Card.Text>
     </Card.Body>
     <button onClick={(obj) => handleAdd(pokemon)}>Add to favorite</button>
        <button onClick={() => setDisplayDetail(!displayDetail)}>Detail</button> 
        {/* ternary operator, if displayDeatil is true than display info about pokemon , else hide detail  */}
        {displayDetail ? 
        <>
        <p>Name📛: {pokemonName} </p>
        <p>type🫥: {pokemonType}</p>
        <p>popular Ability🎯: {pokemonPopularAbility}</p>
        </>
        : ""}

   </Card>
 </Col>
 
 
 
  
</Row>
</Container>
    </div>
  )
}
const mapDispatchToProps=(dispatch) => {
  return{addToFavorite:(pokemon) => dispatch({type:"ADD_TO_FAVORITE", data:pokemon })}
  }
  const mapStateToProps=(state) => {
    return{favorite:state.favorite}
}

export default connect(mapStateToProps, mapDispatchToProps) (Random)
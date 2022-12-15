/* This is importing all the necessary components for the Random.js file. */
import {useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../images/random.css"
import Container from 'react-bootstrap/Container';
import Search from './Search';


const Random = () => {
const [pokemon, setPokemon] = useState({}) //store data about pokemon after fetch call
const [pokemonName, setPokemonName] = useState("") // local state variable 
const [pokemonImage, setPokemonImage] = useState("")
const [userPokemon, setUserPokemon] = useState("")
const [pokemonType, setPokemonType] = useState("")
const [pokemonPopularAbility, setPokemonPopularAbility] = useState("")
const [displayDetail, setDisplayDetail] = useState(false)


useEffect(() => {
 getData()

}, [])


const getData = async() => {
    const number = Math.floor(Math.random() *900) //this function will get us a random number from 0 to 899
let results = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`) // `` ${} template literals por que temples??
let data = await results.json() // convert data to json format
console.log(data)
        const name = data.forms[0].name
        const type = data.types[0].type.name
        const image =data.sprites.other.home.front_default
        const popularAbility = data.abilities[0].ability.name

console.log(image)
          setPokemon(data) //local state variable
          setPokemonName(name)
          setPokemonImage(image)
          setPokemonType(type)
          setPokemonPopularAbility(popularAbility)
}


function refreshPage() {
  window.location.reload();
}

  return (
    <div> 
   
  
      <Search />
          <Container>
             <Row xs={1} md={3} className="g-4">
 <Col>
   <Card className='card-container'>
     <Card.Img className='card-image' variant="top" src={pokemonImage} />
     <Card.Body>
       <Card.Title>Name: {pokemonName}</Card.Title><hr></hr>
       <Card.Text>
       
       </Card.Text>
     </Card.Body>
  
        <button onClick={() => setDisplayDetail(!displayDetail)}>Detail</button> 
     
        {displayDetail ? 
        // ternary operator 
        <>
        <p>Name📛: {pokemonName} </p>
        <p>type🫥: {pokemonType}</p>
        <p>popular Ability🎯: {pokemonPopularAbility}</p>
        </>
        : ""}
    <button onClick={refreshPage}>Click to new pokemon!</button>
   </Card>
 </Col>
 
 
 
  
</Row>
</Container>

    </div>
  )
}


export default Random
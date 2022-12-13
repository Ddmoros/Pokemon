import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Search = () => {
const [pokemonSearch, setPokemonSearch] = useState("")
const [pokemonName, setPokemonName] = useState("")
    const [pokemonImage, setPokemonImage] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonAbility, setPokemonAbility] = useState("")


const fetchPokemon = async() => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
    const pokemonData = await pokemon.json()

    const name = pokemonData.forms[0].name
    const type = pokemonData.types[0].type.name
    const ability = pokemonData.abilities[0].ability.name
  
    const image = pokemonData.sprites.other.home.front_default
     console.log(image)
    setPokemonName(name)
    setPokemonImage(image)
    setPokemonType(type)
    setPokemonAbility(ability)
}


  return (
    <div>

<div id="searchBar">
<input type='text' placeholder='PIKACHU' value={pokemonSearch} onChange={e => setPokemonSearch(e.target.value)} />
<button type='submit' onClick={fetchPokemon}>Search pokemon</button>

</div>



 <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={pokemonImage} />
            <Card.Body>
              <Card.Title>Name: {pokemonName}</Card.Title><hr></hr>
              <Card.Text>
              
               
           
                Type: {pokemonType}, <br></br>
             
                Popular Ability: {pokemonAbility}<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
</Row>

    </div>
  )
}

export default Search
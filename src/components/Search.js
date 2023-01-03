/* react library, the card, col, and row components from the react-bootstrap
library. */
import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




/* the code that is used to search for the pokemon. */
const Search = () => {
    const [pokemonSearch, setPokemonSearch] = useState("")  //values1, values2: thi only way to change value1 is by using Values2
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonImage, setPokemonImage] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonAbility, setPokemonAbility] = useState("")

// making a request to the PokeAPI, userPokemon is state that changes depending on with pokemon button the user click, this userPokemon is for specific POKEMON
const fetchPokemon = async() => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)  //back tic`` is use so the URL can change
    const pokemonData = await pokemon.json()


     // we are taking information FROM the API and storing the DATA in Variable
    const name = pokemonData.forms[0].name
    const type = pokemonData.types[0].type.name
    const ability = pokemonData.abilities[0].ability.name
    const image = pokemonData.sprites.other.home.front_default
     console.log(image)
    
    // we are taking information FROM the API and storing the DATA in Variable
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
              
              // ternary operator or ternary conditional operator
           
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
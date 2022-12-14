/* This is importing the necessary components. */
import React,{useState} from 'react'
import decrementCount from '../actions/decrementCount.js'
import incrementCount from '../actions/incrementCount.js'
import {useDispatch, useSelector} from 'react-redux'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




/**
 * The function Library is a React component that renders a div with a button and a paragraph. The
 * button has an onClick event that dispatches an action to the Redux store. The paragraph displays the
 * value of the Redux store.
 */
const Library = () => {
    const dispatch= useDispatch()
    const value = useSelector(state => state.count)


   /* This is setting the state of the pokemon. */
    const [pokemonImage1, setPokemonImage1] = useState("")
    const [pokemonDefense1, setPokemonDefense1] = useState("")
    const [pokemonAttack1, setPokemonAttack1] = useState("")
    const [pokemonHp1, setPokemonHp1] = useState("")
    const [pokemonType1, setPokemonType1] = useState("")
    const [pokemonName1, setPokemonName1] = useState("")
    const [pokemonPopularMove1, setPokemonPopularMove1] = useState("")
    const [pokemonPopularAbility1, setPokemonPopularAbility1] = useState("")

    const [pokemonImage2, setPokemonImage2] = useState("")
    const [pokemonDefense2, setPokemonDefense2] = useState("")
    const [pokemonAttack2, setPokemonAttack2] = useState("")
    const [pokemonHp2, setPokemonHp2] = useState("")
    const [pokemonType2, setPokemonType2] = useState("")
    const [pokemonName2, setPokemonName2] = useState("")
    const [pokemonPopularMove2, setPokemonPopularMove2] = useState("")
    const [pokemonPopularAbility2, setPokemonPopularAbility2] = useState("")

    const [pokemonImage3, setPokemonImage3] = useState("")
    const [pokemonDefense3, setPokemonDefense3] = useState("")
    const [pokemonAttack3, setPokemonAttack3] = useState("")
    const [pokemonHp3, setPokemonHp3] = useState("")
    const [pokemonType3, setPokemonType3] = useState("")
    const [pokemonName3, setPokemonName3] = useState("")
    const [pokemonPopularMove3, setPokemonPopularMove3] = useState("")
    const [pokemonPopularAbility3, setPokemonPopularAbility3] = useState("")

  /**
   * the fetch API to get the data from the PokeAPI, and using the .json()
   * method to convert the data into a JSON object.
   * para poder manipular la imformacion"data"
   */
    const pokemonLibrary = async() => {
        const pokemonFetch= await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        const pokemonData = await pokemonFetch.json()


/* This is setting the state of the pokemon. */
            const image = pokemonData.sprites.other.home.front_default
            const defense = pokemonData.stats[2].base_stat
            const attack = pokemonData.stats[1].base_stat
            const hp = pokemonData.stats[0].base_stat
            const type = pokemonData.types[0].type.name
            const name = pokemonData.name
            const popularMove = pokemonData.moves[0].move.name
            const popularAbility = pokemonData.abilities[0].ability.name



/* Setting the state of the pokemon. */
        setPokemonImage1(image)
        setPokemonDefense1(defense)
        setPokemonAttack1(attack)
        setPokemonHp1(hp)
        setPokemonType1(type)
        setPokemonName1(name)
        setPokemonPopularMove1(popularMove)
        setPokemonPopularAbility1(popularAbility)

 /* This is fetching the data from the PokeAPI and converting it into a JSON object. */
        const pokemonFetch2= await fetch(`https://pokeapi.co/api/v2/pokemon/${value+1}`)
        const pokemonData2 = await pokemonFetch2.json()

            const image2 = pokemonData2.sprites.other.home.front_default
            const defense2 = pokemonData2.stats[2].base_stat
            const attack2 = pokemonData2.stats[1].base_stat
            const hp2 = pokemonData2.stats[0].base_stat
            const type2 = pokemonData2.types[0].type.name
            const name2 = pokemonData2.name
            const popularMove2 = pokemonData2.moves[0].move.name
            const popularAbility2 = pokemonData2.abilities[0].ability.name
 /* Setting the state of the pokemon. */
        setPokemonImage2(image2)
        setPokemonDefense2(defense2)
        setPokemonAttack2(attack2)
        setPokemonHp2(hp2)
        setPokemonType2(type2)
        setPokemonName2(name2)
        setPokemonPopularMove2(popularMove2)
        setPokemonPopularAbility2(popularAbility2)


 /* This is fetching the data from the PokeAPI and converting it into a JSON object. */
        const pokemonFetch3= await fetch(`https://pokeapi.co/api/v2/pokemon/${value+2}`)
        const pokemonData3 = await pokemonFetch3.json()

            const image3 = pokemonData3.sprites.other.home.front_default
            const defense3 = pokemonData3.stats[2].base_stat
            const attack3 = pokemonData3.stats[1].base_stat
            const hp3 = pokemonData3.stats[0].base_stat
            const type3 = pokemonData3.types[0].type.name
            const name3 = pokemonData3.name
            const popularMove3 = pokemonData3.moves[0].move.name
            const popularAbility3 = pokemonData3.abilities[0].ability.name
/* Setting the state of the pokemon. */
        setPokemonImage3(image3)
        setPokemonDefense3(defense3)
        setPokemonAttack3(attack3)
        setPokemonHp3(hp3)
        setPokemonType3(type3)
        setPokemonName3(name3)
        setPokemonPopularMove3(popularMove3)
        setPokemonPopularAbility3(popularAbility3)
    }


pokemonLibrary()






  return (
    <div>
        Pokemon Button ⤵<br></br>
        <button onClick={() => dispatch(decrementCount(3))}> 🔙 </button>
        <button onClick={() => dispatch(incrementCount(3))}> 🔜</button>

            <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={pokemonImage1} />
            <Card.Body>
              <Card.Title>Name: {pokemonName1}</Card.Title><hr></hr>
              <Card.Text>
                HP: {pokemonHp1}, <br></br>
                Attack: {pokemonAttack1}, <br></br>
                Defense: {pokemonDefense1}, <br></br>
                Type: {pokemonType1}, <br></br>
                Popular Move: {pokemonPopularMove1},<br></br> 
                Popular Ability: {pokemonPopularAbility1}<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={pokemonImage2} />
            <Card.Body>
              <Card.Title>Name: {pokemonName2}</Card.Title><hr></hr>
              <Card.Text>
                HP: {pokemonHp2}, <br></br>
                Attack: {pokemonAttack2}, <br></br>
                Defense: {pokemonDefense2}, <br></br>
                Type: {pokemonType2}, <br></br>
                Popular Move: {pokemonPopularMove2},<br></br> 
                Popular Ability: {setPokemonPopularAbility2}<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={pokemonImage3} />
            <Card.Body>
              <Card.Title>Name: {pokemonName3}</Card.Title><hr></hr>
              <Card.Text>
                HP: {pokemonHp3}, <br></br>
                Attack: {pokemonAttack3}, <br></br>
                Defense: {pokemonDefense3}, <br></br>
                Type: {pokemonType3}, <br></br>
                Popular Move: {setPokemonPopularMove3},<br></br> 
                Popular Ability: {pokemonPopularAbility3}<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

       



    </div>
  )
}

export default Library
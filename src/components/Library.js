import React,{useState} from 'react'
import decrementCount from '../actions/decrementCount.js'
import incrementCount from '../actions/incrementCount.js'
import {useDispatch, useSelector} from 'react-redux'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const Library = () => {
    const dispatch= useDispatch()
    const value = useSelector(state => state.count)


    const [pokemonImage1, setPokemonImage1] = useState("")
    const [pokemonDefense, setPokemonDefense] = useState("")
    const [pokemonAttack, setPokemonAttack] = useState("")
    const [pokemonHp, setPokemonHp] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonPopularMove, setPokemonPopularMove] = useState("")
    const [pokemonPopularAbility, setPokemonPopularAbility] = useState("")
    const pokemonLibrary = async() => {
        const pokemonFetch= await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        const pokemonData = await pokemonFetch.json()
        const image = pokemonData.sprites.other.home.front_default
        const defense = pokemonData.stats[2].base_stat
        const attack = pokemonData.stats[1].base_stat
        const hp = pokemonData.stats[0].base_stat
        const type = pokemonData.types[0].type.name
        const name = pokemonData.name
        const popularMove = pokemonData.moves[0].move.name
        const popularAbility = pokemonData.abilities[0].ability.name





        setPokemonImage1(image)
        setPokemonDefense(defense)
        setPokemonAttack(attack)
        setPokemonHp(hp)
        setPokemonType(type)
        setPokemonName(name)
        setPokemonPopularMove(popularMove)
        setPokemonPopularAbility(popularAbility)

    }


pokemonLibrary()






  return (
    <div>
            <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={pokemonImage1} />
            <Card.Body>
              <Card.Title>{pokemonName}</Card.Title>
              <Card.Text>
                HP: {pokemonHp}, 
                Attack: {pokemonAttack}, 
                Defense: {pokemonDefense}, 
                Type: {pokemonType}, 
                Popular Move: {pokemonPopularMove}, 
                Popular Ability: {pokemonPopularAbility}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

       
        <button onClick={() => dispatch(decrementCount(1))}>previous</button>
        <button onClick={() => dispatch(incrementCount(1))}>next</button>


    </div>
  )
}

export default Library
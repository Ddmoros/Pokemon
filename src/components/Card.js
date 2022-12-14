/* The above code is importing the React library and the useState hook from the React library. */
import React,{useState} from 'react'
import "../images/styles.css"


/**
 * The function takes in a user input, and then uses that input to fetch data from the PokeAPI. The
 * data is then stored in variables, and then those variables are used to set the state of the app
 */
const Card =  () => {
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonImage, setPokemonImage] = useState("")
    const [userPokemon, setUserPokemon] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonAbility, setPokemonAbility] = useState("")

  /**
    using the `fetch` function to make a request to the PokeAPI.
   */
    const fetchPokemon = async (userPokemon) => {
    console.log(userPokemon)
        const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon}`)
        const pokemonDetail = await pokemon.json() //manipular la informacion de la data que esta en fetch = APi
     console.log(pokemonDetail)
  
         /* The above code is creating variables that are storing the name, type, and ability of the
    pokemon. */
        const name = pokemonDetail.forms[0].name
        const type = pokemonDetail.types[0].type.name
        const ability = pokemonDetail.abilities[0].ability.name
        const image = pokemonDetail.sprites.other.home.front_default
    console.log(image)
        
        
        /* the state of the app to the variables that are storing the name,
        type, and ability of the pokemon. */
        setPokemonName(name)
        setPokemonImage(image)
        setPokemonType(type)
        setPokemonAbility(ability)
    }

  
    


/**
 * When the user clicks on a button, the value of that button is set to the state of userPokemon, and
 * then the fetchPokemon function is called with the value of the button as the argument.
 */
   const handleClick = (e) => { 
    setUserPokemon(e.target.value)
    fetchPokemon(e.target.value)
  } 

  return (
    <div>
        <div>
       

            <button value="pikachu" onClick={(e) => handleClick(e)}>pikachu</button>
            <button value="pichu" onClick={(e) => handleClick(e)}>pichu</button>
            <button value="raichu" onClick={(e) => handleClick(e)}>raichu</button>
            <button value="gengar" onClick={(e) => handleClick(e)}>gengar</button>
            <button value="charizard" onClick={(e) => handleClick(e)}>charizard</button>
            <button value="abra" onClick={(e) => handleClick(e)}>abra</button>
            <button value="gengar" onClick={(e) => handleClick(e)}>gengar</button>
            <button value="mew" onClick={(e) => handleClick(e)}>mew</button>
            <button value="squirtle" onClick={(e) => handleClick(e)}>squirtle</button>
            <button value="charmander" onClick={(e) => handleClick(e)}>charmander</button>
            <button value="zubat" onClick={(e) => handleClick(e)}>zubat</button>
            <button value="onix" onClick={(e) => handleClick(e)}>onix</button>
            <button value="muk" onClick={(e) => handleClick(e)}>muk</button>
            <button value="snorlax" onClick={(e) => handleClick(e)}>snorlax</button>
            <button value="tauros" onClick={(e) => handleClick(e)}>tauros</button>
            <button value="yamask" onClick={(e) => handleClick(e)}>yamask</button>
            
         
           
        </div>
       
     
        <h1>{pokemonName}</h1>
        <img alt={pokemonName} src={pokemonImage}/>
        <p>Type: {pokemonType}</p>
        <p>Ability: {pokemonAbility}</p>


    </div>
  )
}

export default Card

// https://pokeapi.co/docs/v2

// name pokemon1123
// pikachu
// pichu 
// raichu
// Charizard 
// Gengar 
// Arcanine 
// Bulbasaur
// Eevee 
// Dragonite 
// Squirtle 
// Ninetales
// Gengar
// Gardevoir
// Garchomp.
// Sylveon. 
// Umbreon. 
// Charizard.
// Mimikyu.
// Bulbasaur: 
// Charizard: 
// Squirtle: 
// Kingler: 
// Muk: 
// Tauros: 
// Snorlax
// Ivysaur
// Venusaur
// Charmander
// Charmeleon
// Charizard
// Squirtle
// Wartortle
// Blastoise
// Caterpie
// Metapod
// Butterfree
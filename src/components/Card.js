/* The above code is importing the React library and the useState hook from the React library. */
import React,{useState} from 'react'
import "../images/styles.css" //the code is importing styles Css




const Card =  () => {
  /* The above code is creating a function called Card. */
    const [pokemonName, setPokemonName] = useState("")  //values1, values2: thi only way to change value1 is by using Values2
    const [pokemonImage, setPokemonImage] = useState("") // value1 = state, value2 = How we update or change STATE
    const [userPokemon, setUserPokemon] = useState("") // useState
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonAbility, setPokemonAbility] = useState("")
     /* The above code is creating state variables that are storing the name, image, type, and ability of
   the pokemon. */

  /**
    using the `fetch` function to make a request to the PokeAPI.
   */
    const fetchPokemon = async (userPokemon) => { //parameter userPokemon
    console.log(userPokemon)
    
    // making a request to the PokeAPI, userPokemon is state that changes depending on with pokemon button the user click, this userPokemon is for specific POKEMON
        const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon}`) //back tic`` is use so the URL can change
        const pokemonDetail = await pokemon.json() //manipular la informacion de la data que esta en fetch = APi
     console.log(pokemonDetail)
  
    // we are taking information FROM the API and storing the DATA in Variable
        const name = pokemonDetail.forms[0].name //variable name
        const type = pokemonDetail.types[0].type.name
        const ability = pokemonDetail.abilities[0].ability.name
        const image = pokemonDetail.sprites.other.home.front_default
    console.log(image)
        
        
    //we are taking this stored DATA and assigning it to our STATE
        setPokemonName(name)
        setPokemonImage(image)
        setPokemonType(type)
        setPokemonAbility(ability)
    }

  
    



   const handleClick = (e) => { 
    setUserPokemon(e.target.value) //keyWord target.Value
    fetchPokemon(e.target.value) // target is all <button> value value= " pikachu "
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
       
     {/* we are display thi updated state */}
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
import {useEffect,useState} from 'react'


const Random = () => {
const [pokemon, setPokemon] = useState({}) //store data about pokemon after fetch call
const [pokemonName, setPokemonName] = useState("")
const [pokemonImage, setPokemonImage] = useState("")
const [userPokemon, setUserPokemon] = useState("")
const [pokemonType, setPokemonType] = useState("")
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

console.log(image)
setPokemon(data)
setPokemonName(name)
setPokemonImage(image)
setPokemonType(type)
}



  return (
    <div>
         <h1>{pokemonName}</h1>
        <img alt={pokemonName} src={pokemonImage}/>
        <button>Add to favorite</button>
        <button onClick={() => setDisplayDetail(!displayDetail)}>Detail</button> 
        {/* ternary operator, if displayDeatil is true than display info about pokemon , else hide detail  */}
        {displayDetail ? 
        <>
        <p> {pokemonName} </p>
        <p>type: {pokemonType}</p>
        </>
        : ""}
    
    </div>
  )
}

export default Random
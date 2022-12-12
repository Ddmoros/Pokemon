
import { connect } from 'react-redux'
const Favorite = (props) => {

console.log(props.favorite)


    let allCharacters = props.favorite
    let character = allCharacters.forEach(pokemon=>{
        // console.log(pokemon.name)
        console.log(pokemon.forms[0].name)
        return <p>{pokemon.forms[0].name}</p>
    })

  return (

<>
        {character}
       
</>
  )
}
const mapDispatchToProps=(dispatch) => {
    return{addToFavorite:() => ({type:"ADD_TO_FAVORITE"})}
    }
const mapStateToProps=(state) => {
    return{favorite:state.favorite}
}



export default connect(mapStateToProps,mapDispatchToProps) (Favorite)

import { connect } from 'react-redux'
const Favorite = (props) => {

console.log(props.favorite)



    let character = props.favorite.forEach(pokemon=>{
        console.log(pokemon.name)
        return <p>{pokemon.name}</p>
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
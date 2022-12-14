/* Importing the PokemonNav component from the PokemonNav.js file. */
/* Importing the React library from the node_modules folder. */
import React from 'react'
import PokemonNav from '../PokemonNav'




/* A function that takes in a prop called children. */
const BaseLayout = ({children}) => {
  return (
    <div>
        <PokemonNav />
        {children}


    </div>
  )
}

export default BaseLayout
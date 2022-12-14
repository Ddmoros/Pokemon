
/* Importing the React library. */
import React from 'react'
/* Importing the PokemonNav component from the PokemonNav.js file. */
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
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
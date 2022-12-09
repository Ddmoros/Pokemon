import React from 'react'
import PokemonNav from '../PokemonNav'




const BaseLayout = ({children}) => {
  return (
    <div>
        <PokemonNav />
        {children}


    </div>
  )
}

export default BaseLayout
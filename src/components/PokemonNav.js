/* The above code is importing the react-bootstrap components that we will be using in our NavBar. */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





/* Importing the Link component from the react-router-dom library. */
import { Link } from 'react-router-dom'



/* The above code is creating a navbar with a container. The container is holding the navbar. The
navbar is holding the navbar.brand, navbar.toggle, and navbar.collapse. The navbar.brand is holding
the title of the app. The navbar.toggle is holding the navbar.collapse. The navbar.collapse is
holding the nav. The nav is holding the links to the different pages. */
const PokemonNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="Danger">
    <Container>
      <Navbar.Brand href="/"><span className='title-nav'>Pokemon App⚡️ </span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
      
            <Link to="/" className='path'> Home🏠 </Link>
            <Link to="/Card" className='path'> Card📇 </Link>
            <Link to="/Random" className='path'> Random📚 </Link>
           

          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>


  
  )
}

export default PokemonNav

// https://react-bootstrap.github.io/components/dropdowns/
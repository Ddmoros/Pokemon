/* Importing the React library. */
import React from 'react'
/* Importing the css file for the footer. */
import '../images/footer.css'
/* Importing the icons from the react-icons library. */
import {FaGithub, FaLinkedin, FaFingerprint} from 'react-icons/fa'

/* Creating the links to my github, linkedin, and portfolio. */
const Footer = () => {
  return (
    <div className='footerMain'>

  
        <a href="https://github.com/Ddmoros/Pokemon"><FaGithub className='icons' size={30} /></a>
											
		    <a href="https://www.linkedin.com/in/daniel-moros-059711210/" target="_blank" ><FaLinkedin className='icons' size={30} /></a>
											
		   <a href="https://ddmoros.wixsite.com/ddmportfolio" target="_blank" ><FaFingerprint className='icons' size={30} /></a>
    </div>
  )
}
//Importe npm install react-icons para tener los simbolos abajo de mi apliacion AiFillGithub,
// Target="_blank" esta funcion es para saltar a otra pag.web


export default Footer
import React from 'react'
import '../images/footer.css'
import {FaGithub, FaLinkedin, FaFingerprint} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footerMain'>

        <a href="https://github.com/Ddmoros"><FaGithub className='icons' size={30} /></a>
											
		    <a href="https://www.linkedin.com/in/daniel-moros-059711210/" target="_blank" ><FaLinkedin className='icons' size={30} /></a>
											
		   <a href="https://ddmoros.wixsite.com/ddmportfolio" target="_blank" ><FaFingerprint className='icons' size={30} /></a>
    </div>
  )
}

export default Footer
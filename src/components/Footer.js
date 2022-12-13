import React from 'react'
import '../images/footer.css'
import {FaGithub, FaLinkedin, FaFingerprint} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footerMain'>
        <a href="https://github.com/Ddmoros" target="_blank" rel="noreferrer"><FaGithub className='icons' size={25} /></a>
											
		<a href="https://www.linkedin.com/in/daniel-moros-059711210/" target="_blank" rel="noreferrer"><FaLinkedin className='icons' size={25} /></a>
											
		<a href="https://ddmoros.wixsite.com/ddmportfolio" target="_blank" rel="noreferrer"><FaFingerprint className='icons' size={25} /></a>
    </div>
  )
}

export default Footer
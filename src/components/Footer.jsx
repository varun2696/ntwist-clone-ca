import React from 'react'
import { CiTwitter, CiLinkedin } from 'react-icons/ci';
const Footer = () => {
  return (
    <div className='footer'>
       <img className='footerLogo' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="footerLogo" />
        <div className='footer-list'>
            <p>Home</p>
            <p>About Us </p>
            <p>Contact Us </p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
        </div>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div className='footer-icons'>
            <CiTwitter size={20}  style={{ backgroundColor: '#fff' }}/>
            <CiLinkedin size={20} style={{ backgroundColor: '#fff' }} />
        </div>
        <p>© 2022. Ntwist Inc.</p>
    </div>
  )
}

export default Footer

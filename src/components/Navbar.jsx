import React from 'react'

const Navbar = () => {
    return (
        <div className='home-bg-img'>
            <header className='header-section'>
                <img className='logo' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="logo" />
                <nav className='navbar'>
                    <ul className='nav-links'>
                        <li>Home</li>
                        <li>Industeries</li>
                        <li>AI Software</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
            <div className="home-banner">
                <div className='home-banner-left'>
                    <h2>
                        Data-powered solutions
                        <br />
                        for Industrial Excellence 
                    </h2>
                    <button>Read More</button>
                </div>
                <div className='home-banner-right'>
                   <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

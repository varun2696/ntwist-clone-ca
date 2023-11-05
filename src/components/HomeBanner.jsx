import React from 'react'
import Button from './Button'

const HomeBanner = () => {
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
                    <Button
                        text={'Read More'}
                        textColor={'#fff'}
                        bg={'#007aff'}
                        fontSize={'0.9rem'}
                        pl={'40px'}
                        pr={'40px'}
                        pt={'10px'}
                        pb={'10px'}
                    />
                </div>
                <div className='home-banner-right'>
                    <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner

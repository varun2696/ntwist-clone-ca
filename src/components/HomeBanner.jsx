import React, { useEffect } from 'react'
import Button from './Button'


const HomeBanner = () => {

    useEffect(() => {
        const navbar = document.querySelector('.header-section');
        window.onscroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-active');
            } else {
                navbar.classList.remove('nav-active');
            }
        };
    }, [])

    return (
        <div className='home-bg-img'>
            <header className='header-section'>
                <img className='logo before-scroll-img' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="logo" />
                <img className='logo after-scroll-img' src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" alt="logo" />
                <nav className='navbar'>
                    <ul className='nav-links'>
                        <li>Home</li>
                        <li id='dropbtn'>
                            Industries
                        </li>
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

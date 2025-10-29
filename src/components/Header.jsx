import React from 'react'
import { Menu } from 'lucide-react'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-content'>
                    {/* Логотип */}
                    <div className='logo'>
                        <div className='logo-icon'>
                            <span className='logo-letter'>C</span>
                        </div>
                    </div>
                    {/* Меню */}
                    <div lassName='nav-menu'>
                        <nav className='knopki'>
                            <ul className="nav-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#works">Works</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* кнопка меню для мобилок */}
                    <button className='mobile-contact-btn'>Contact us</button>
                </div>
            </div>
        </header>
    )
}

export default Header
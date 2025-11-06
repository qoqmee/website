import React from 'react'
import { Menu } from 'lucide-react'

const Header = () => {
    return (
        <header id='home' className='header'>
            <div className='header-container'>
                <div className='header-content'>
                    {/* Логотип */}
                    <div className='logo'>
                        <div className='logo-icon'>
                            <span className='logo-letter'>C</span>
                        </div>
                    </div>
                    {/* Меню */}
                    <div className='nav-menu'>
                        <nav className='knopki'>
                            <ul className="nav-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#works">Works</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* кнопка */}
                    <button className='mobile-contact-btn'><p>Contact us</p></button>
                    <div className='menu'>
                        <input type="checkbox" id="burger-checkbox" class="burger-checkbox"></input>
                        <label for="burger-checkbox" class="burger"></label>
                        <ul className="menu-list">
                            <li><a href="#home" class="menu-item">Home</a></li>
                            <li><a href="#works" class="menu-item">Works</a></li>
                            <li><a href="#about" class="menu-item">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 
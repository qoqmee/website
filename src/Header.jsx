import React from 'react'
import { Menu } from 'lucide-react'

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className='container mx-auto px-4 py-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                            <span className='text-white font-bold text-xl'>C</span>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#works" className="text-gray-600 hover:text-blue-600">Works</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                        <a href="#contact" className="text-blue-500 font-medium">Contact us</a>
                    </nav>

                    {/* кнопка меню для мобилок */}
                    <button className="md:hidden bg-blue-500 text-white px-4 py-2 rounded-lg">Contact us</button>
                    <button className="md:hidden text-gray-600">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import { ArrowRight } from 'lucide-react';

const Girl = () => {
    return (
        <section className='hero-section'>
            <div className='container mx-auto px-4 py -16'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='md:w-1/2 text-center md:text-left'>
                        <h1 className='hero-title'>Make your business more powerful
                            with us</h1>
                        <p className='hero-description'>We provide various services to make <br /> your business grow and get bigger.
                            Your <br />satisfaction is our first priority.
                        </p>
                        <button className='hero-button'>Get Started <ArrowRight /></button>
                    </div>
                    <div className='md:w-1/2 mt-8 md:mt-0'>
                        <div className='hero-image'>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Girl
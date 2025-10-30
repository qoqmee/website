import React from 'react'
import { ArrowRight } from 'lucide-react';

const Girl = () => {
    return (
        <section className='girl-section'>
            <div className='girl-container'>
                <div className='girl-content'>
                    <div className='girl-text'>
                        <h1 className='girl-title'>Make your business more powerful with us</h1>
                        <p className='girl-description'>We provide various services to make <br /> your business grow and get bigger.
                            Your <br />satisfaction is our first priority.
                        </p>
                        <button className='girl-button'> <p>Get Started ⭢</p></button>
                    </div>
                    <div className='girl-img-container'>
                        <div className='girl-img-wrapper'>
                            <img src="src/assets/blue.svg" alt="" className='layer-blue'/>
                            <img src="src/assets/yellow.svg" alt="" className='layer-yellow' />
                            <img src="src/assets/woman.svg" alt="" className='layer-woman' />
                            <img src="src/assets/right.svg" alt="" className='layer-right' />
                            <img src="src/assets/left.svg" alt="" className='layer-left' />
                            <img src="src/assets/kryg.svg" alt="" className='layer-kryg' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Girl
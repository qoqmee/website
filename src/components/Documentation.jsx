import React from 'react'

const Documentation = () => {
    return (
        <section className="documentation-section">
            <div className="documentation-container">
                <div className="documentation-text">
                    <div className="documentation-subtitle">Our Documentation</div>
                    <h2 className="documentation-title">
                        See what our profile is like and how we work for your <br /> business
                    </h2>
                </div>
                <div className="documentation-image-wrapper">
                    <img src="src/assets/people.svg" alt="Team meeting" className="documentation-image"
                    />
                </div>
            </div>
        </section>
    )
}

export default Documentation
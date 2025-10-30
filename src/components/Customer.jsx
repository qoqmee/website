import React from 'react'

const Customer = () => {
    return (
        < section className="customer-satisfaction">
            <div className="cs-container">
                {/* Левая часть: цифры */}
                <div className="cs-stats">
                    <div className="cs-stat-card">
                        <div className="cs-stat-number cs-stat-purple">70K+</div>
                        <div className="cs-stat-text">We have more than customers</div>
                    </div>

                    <div className="cs-stat-card">
                        <div className="cs-stat-number cs-stat-orange">100+</div>
                        <div className="cs-stat-text">Projects we have completed</div>
                    </div>

                    <div className="cs-stat-card">
                        <div className="cs-stat-number cs-stat-red">10M+</div>
                        <div className="cs-stat-text">People who are helped because of our hard work</div>
                    </div>

                    <div className="cs-stat-card">
                        <div className="cs-stat-number cs-stat-green">200+</div>
                        <div className="cs-stat-text">Support from world-renowned companies</div>
                    </div>
                </div>

                {/* Правая часть: текст и список */}
                <div className="cs-content">
                    <h2 className="cs-title">Customer satisfaction is our first priority</h2>
                    <p className="cs-description">
                        We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:
                    </p>

                    <ul className="cs-benefits">
                        <li><img src="src/assets/Exclude.svg" alt="" />Provide idea support from our creative team</li>
                        <li><img src="src/assets/Exclude.svg" alt="" />Provide attractive and professional design services</li>
                        <li><img src="src/assets/Exclude.svg" alt="" />Support for service 24 hours a week</li>
                        <li><img src="src/assets/Exclude.svg" alt="" />Helping our customers to grow their business</li>
                        <li><img src="src/assets/Exclude.svg" alt="" />Provide support to market products through online marketplace</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Customer
import './FooterSect.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Блок "Start a New Project" */}
            <div className="cta-block">
                <h3 className="cta-subtitle">Are You Ready For</h3>
                <h2 className="cta-title">Start a New Project</h2>
                <button className="cta-button">Start Now →</button>
            </div>

            {/* Блок "Subscribe Now" */}
            <div className="subscribe-block">
                <h3 className="subscribe-subtitle">Get Notified About Project</h3>
                <h2 className="subscribe-title">Subscribe Now</h2>
                <div className="subscribe-form">
                    <div className="subscribe-input-wrapper">
                        <input type="email" placeholder="Email" className="subscribe-input" />
                        <button type="submit" className="subscribe-submit">→</button>
                    </div>
                </div>
            </div>

            {/* Основной футер */}
            <div className="main-footer">
                <div className="footer-content">
                    {/* Левая колонка: логотип и текст */}
                    <div className="footer-col">
                        <div className="footer-logo">C</div>
                        <p className="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    {/* Центральная колонка: карта мира */}
                    <div className="footer-col">
                        <h6 className="footer-heading">Our Office</h6>
                        <img src="src/assets/Frame.svg" alt="World Map" className="world-map" />
                    </div>

                    {/* Правая колонка: контакты */}
                    <div className="footer-col">
                        <h6 className="footer-heading">Contact</h6>
                        <p className="footer-contact">
                            Jl KH Samanhudi<br />
                            Metro Atom Plaza B1<br />
                            AKS I/II, DKI Jakarta<br /><br />
                            info@yourdomain.com<br /><br />
                            +62 (0) 000 0000 00
                        </p>
                    </div>
                </div>

                {/* Нижняя панель: меню и копирайт */}
                <div className="footer-bottom">
                    <p className="copyright">© 2021 Creative Agency</p>
                    <nav className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#works">Works</a>
                        <a href="#about">About</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#contact">About</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
export default Footer
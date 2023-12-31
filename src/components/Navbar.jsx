import { useState } from 'react';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                <a className="navbar-brand" href="index.html">
                    <img src="assets/images/cherry-logo.png" className="img-fluid cherry-logo" alt=""/>
                    Cherry</a>
                <button 
                    className="navbar-toggler" 
                    id="hamburger-menu"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="true" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="index.html">Anasayfa</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">Hakkımızda</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">İletişim</a></li>
                    </ul>
                </div>
                </div>
            </nav>
    )
}
export default Navbar;
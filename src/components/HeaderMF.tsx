import React from 'react';
import './HeaderMF.css';

const HeaderMF: React.FC = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="logo">
                    StrideDemo
                </div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#solutions">Solutions</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="header-actions">
                    <button className="btn-primary">Get Started</button>
                </div>
            </div>
        </header>
    );
};

export default HeaderMF;

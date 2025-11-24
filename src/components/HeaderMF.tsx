import React from 'react';
import './HeaderMF.css';

const HeaderMF: React.FC = () => {
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation from the remote compo</h1>
    </div>
  );
};

export default HeaderMF;

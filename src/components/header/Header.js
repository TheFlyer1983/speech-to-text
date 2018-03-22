import React from 'react';

const Header = () => {
  return(
    <div className="page-header section-dark" style={{backgroundImage: `url( https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg)`}}>
      <div className="filter"></div>
      <div className="content-center">
        <div className="container">
          <div className="title-brand">
            <h1 className="presentation-title">Speech to Text App</h1>
            <div className="fog-low">
              <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt=""/>
            </div>
            <div className="fog-low right">
              <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt=""/>
            </div>
          </div>
          <h2 className="presentation-subtitle text-center">This is created using IBM Watson</h2>
        </div>
      </div>
      <div className="moving-clouds" style={{backgroundImage: `url(https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png)`}}>
      </div>
    </div>
  )
}

export default Header;

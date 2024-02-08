import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar '>
          <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navBar">
          <a className="navbar-brand text-light ms-3" href="#">Tienda 3D</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Imbibe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                        </ul>
                        <span className="navbar-text">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-semibold ms-5 linksAnimation" aria-current="page" href="#">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold ms-5 linksAnimation" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold ms-5 linksAnimation" href="#">View Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold ms-5 linksAnimation" href="#">Contact</a>
                            </li>
                        </ul>
                        </span>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
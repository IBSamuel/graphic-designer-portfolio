import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">Imbibe</a>
                    <p className="navbar-toggler border-0"  data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-toggles text-dark"></i>
                    </p>
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
                            <li className="nav-item">
                                <a className="nav-link hireMeAnimation rounded ps-5 pe-5 rounded-5 border-2 border border-dark" href="#"><span>Hire Me</span></a>
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
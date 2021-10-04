import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

function Navbar({children}) {
	// eslint-disable-next-line
	const [shrink, setShrink] = useState(false);
	const [nav,setNav] = useState('navbar-shrink text-uppercase')
	const navbarShrink = () => {
		if (window.scrollY <= 61) {
			setShrink(false);
			setNav('navbar-shrink text-uppercase');
			document.querySelector('meta[name="theme-color"]').content = '#262437';
		} else {
			setShrink(true);
			setNav('bg-black');
			document.querySelector('meta[name="theme-color"]').content = '#000000';
		}
	}
	window.addEventListener('scroll',navbarShrink)
	return (
		<div className="bg-custom min-vh-100">
			<nav className={`navbar navbar-expand-lg sticky-top rounded-bottom navbar-dark ${nav}`} id="mainNav">
				<div className="container">
					<NavLink className="navbar-brand fw-bold mx-4" to="/"><i className="bi bi-laptop"></i></NavLink>
					<button className="navbar-toggler border-0 shadow-sm mx-4" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent">
						<span className="fs-1 fw-bold"><i className="bi bi-filter-right text-pink"></i></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul className="navbar-nav mb-2 mb-lg-0 mx-3">
							<li className="nav-item">
								<NavLink exact className="nav-link" to="/">Beranda</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/profil">Profil</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/portfolio">Portofolio</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/kontak">Kontak</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div>{children}</div>
		</div>
		);
	}
	
	export default Navbar;
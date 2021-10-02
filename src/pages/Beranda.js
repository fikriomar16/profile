import React, { useEffect } from 'react';
import fotoprofil from '../img/fotoprofil.jpg';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

function Beranda(props) {
	useEffect(()=>{
		// eslint-disable-next-line
		const typed = new Typed(".typed", {
			strings : ["Programmer","Software Engineer","Freelancer","Backend Developer","IT Support"],
			typeSpeed : 60,
			startDelay : 90,
			loop: true,
			showCursor: true,
			cursorChar: "_"
		});
	},[])
	return (
		<div className="py-4 home-page">
			<div className="container">
				<div className="row h-100 justify-content-center">
					<div className="col-lg my-auto">
						<div className="pt-5 pb-4">
							<img src={fotoprofil} alt="FotoProfil" className="foto-profil img-fluid rounded-circle d-block mx-auto my-5" />
						</div>
						<div className="text-center text-light">
							<h1 className="fw-bold teks">Fikri Omar</h1>
							<h4 className="mt-3 pb-5 teks">Hello, I'm <span className="typed text-info fw-bold"></span></h4>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-center py-4">
					<div className="col-lg my-auto text-center" id="shortcutlink">
						<div className="row h-100 justify-content-center py-4">
							<div className="col-auto">
								<i className="bi bi-dot small fw-bold text-light"></i>
								<Link to="/profil" className="text-decoration-none fw-bold bg-light text-dark px-2 py-1 m-1">Profil</Link>
								<i className="bi bi-dot small fw-bold text-light"></i>
								<Link to="/portfolio" className="text-decoration-none fw-bold bg-light text-dark px-2 py-1 m-1">Portofolio</Link>
								<i className="bi bi-dot small fw-bold text-light"></i>
								<Link to="/kontak" className="text-decoration-none fw-bold bg-light text-dark px-2 py-1 m-1">Kontak</Link>
								<i className="bi bi-dot small fw-bold text-light"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-center pt-4">
					<div className="col-lg my-auto text-center teks">
						<p className="text-light mb-0">Designed by <a href="https://github.com/fikriomar16" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-orange fw-bold">Fikri Omar</a> &copy; 2021</p>
						<p className="text-light">Powered by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info fw-bold">React.js</a> </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Beranda;
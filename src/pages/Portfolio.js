import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Portfolio(props) {
	const [porto, setPorto] = useState([])
	const getPorto = async () => {
		try {
			let response = await axios.get('portfolio.json')
			setPorto(response.data.portfolio)
		} catch (error) {
			console.log(error.message);
		}
	}
	useEffect(()=>{
		getPorto()
	},[])
	return (
		<div className="py-4">
			<div className="container">
				<div className="row h-100 justify-content-start pb-4">
					<div className="col-lg-auto my-auto">
						<Link to="/profil" className="text-decoration-none btn btn-sm btn-light shadow">
							<i className="bi bi-arrow-left-short"></i>&nbsp; Profil
						</Link>
					</div>
				</div>
				<div className="row h-100 justify-content-center pb-5">
					<div className="col-lg my-auto">
						<h1 className="text-center text-white fw-bold fs-1 text-uppercase">
							Portfolio
						</h1>
						<h5 className="text-white my-4 px-4 px-lg-0"><i className="h3 bi bi-journal-text fw-bold text-info"></i>&nbsp;Link repositori untuk daftar portofolio : <a className="text-decoration-none text-info fw-bold" href="https://github.com/fikriomar16" target="_blank" rel="noopener noreferrer">github.com/fikriomar16</a></h5>
						<div className="row h-100 justify-content-center g-0 pt-3 pt-lg-5">
							<div className="col-lg px-4 px-lg-0">
								<div className="row h-100 justify-content-center g-3">
									{
										porto.map((prt,idx)=>{
											return(
												<div className="col-lg-4 col-md-6 mb-4" key={idx}>
													<div className="card border-0 shadow-md h-100 rounded-3 bg-dark mb-3 text-light">
														<center><img src={prt.gambar} className="card-img-top img-fluid" alt={prt.judul} /></center>
														<div className="card-body">
															<h5 className="fw-bold text-info">{prt.judul}</h5>
															<p>Project : <strong className="text-warning">{prt.project}</strong></p>
															<p className="fw-bold"><em>{prt.desc}</em></p>
														</div>
														<div className="card-footer border-0">
															<a href={prt.link} target="_blank" rel="noopener noreferrer" className="d-flex text-pink btn btn-light btn-sm justify-content-center fw-bold"><i className="bi-cursor-fill"></i>&nbsp;Menuju Project</a>
														</div>
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-end pb-3">
					<div className="col-lg-auto my-auto">
						<Link to="/kontak" className="text-decoration-none btn btn-sm btn-light shadow-lg float-end">
							<i className="bi bi-arrow-right-short"></i>&nbsp; Kontak
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
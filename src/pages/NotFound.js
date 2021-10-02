import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
	return (
		<div className="bg-custom">
			<div className="row justify-content-center align-items-center align-middle vh-100">
				<div className="col-auto my-auto px-lg-0 px-5">
					<div className="card card-body border-0 shadow rounded-3 p-lg-5 p-3 h-100 text-center">
						<div className="bg-danger pt-3 pb-0 rounded-3">
							<p className="fw-bold display-1 text-uppercase text-light">OOPS!!</p>
						</div>
						<p className="fw-bold fs-3 text-uppercase text-pink py-5">Halaman Tidak Ditemukan</p>
						<Link to="/" className="btn btn-lg btn-light text-pink fw-bold text-uppercase"><i className="bi bi-arrow-left me-2"></i>Menuju Halaman Utama</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
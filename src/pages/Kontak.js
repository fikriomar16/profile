import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Kontak(props) {
	const [nama,setNama] = useState('');
	const [email,setEmail] = useState('');
	const [pesan,setPesan] = useState('');
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzV0HMGCuZqzZ_jD8CnbCL_Lhagpe5G_RPgJ_eYMKjjRa9GNI8pt4epOMovukfZz-oqmw/exec';
	const btnLoading = document.querySelector('.btn-loading');
	const btnKirim = document.querySelector('.btn-kirim');
	const alert = document.querySelector('#alertForm');
	const formData = new FormData();
	const config = {     
		headers: { 'content-type': 'multipart/form-data' }
	}
	const formSubmit = (e) => {
		e.preventDefault()
		btnLoading.classList.remove('d-none');
		btnKirim.classList.add('d-none');
		alert.classList.add('d-none');
		formData.append('nama',nama);
		formData.append('email',email);
		formData.append('pesan',pesan);
		axios.post(scriptURL, formData, config).then(response=>{
			btnLoading.classList.add('d-none');
			btnKirim.classList.remove('d-none');
			alert.classList.remove('d-none');
			console.log('Success! ', response);
			setNama('');setEmail('');setPesan('')
		}).catch(error => console.error('Error! ', error.message));
	}
	return (
		<div className="py-4">
			<div className="container">
				<div className="row h-100 justify-content-start pb-4">
					<div className="col-lg-auto my-auto">
						<Link to="/portfolio" className="text-decoration-none btn btn-sm btn-light shadow">
							<i className="bi bi-arrow-left-short"></i>&nbsp; Portofolio
						</Link>
					</div>
				</div>
				<div className="row h-100 justify-content-center pb-5">
					<div className="col-lg my-auto">
						<h1 className="text-center text-white fw-bold fs-1 text-uppercase">
							Kontak
						</h1>
						<div className="row h-100 justify-content-center py-5">
							<div className="col-lg-4 my-3">
								<ul className="list-group list-group-flush rounded-3 shadow-sm teks">
									<li className="list-group-item text-light bg-transparent border-0">
										<div className="row no-gutters align-items-center">
											<div className="col-auto">
												<h3><i className="bi bi-pin-map-fill" /></h3>
											</div>
											<div className="col ml-2">
												<p><strong>Alamat : </strong></p>
												<h5 className="fw-bold text-info">Kronggahan 1, Kranggahan, Jl. Kabupaten, Sleman, D.I.Y</h5>
											</div>
										</div>
									</li>
									<li className="list-group-item text-light bg-transparent border-0">
										<div className="row no-gutters align-items-center">
											<div className="col-auto">
												<h3><i className="bi bi-linkedin" /></h3>
											</div>
											<div className="col ml-2">
												<p><strong>LinkedIN : </strong></p>
												<h5><a href="https://www.linkedin.com/in/fikriomar16/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info fw-bold">Fikri Omar</a></h5>
											</div>
										</div>
									</li>
									<li className="list-group-item text-light bg-transparent border-0">
										<div className="row no-gutters align-items-center">
											<div className="col-auto">
												<h3><i className="bi bi-envelope-fill"></i></h3>
											</div>
											<div className="col ml-2">
												<p><strong>E-mail : </strong></p>
												<h5><a href="mailto:fikriomar60@gmail.com" className="text-decoration-none text-info fw-bold">fikriomar60@gmail.com</a></h5>
											</div>
										</div>
									</li>
									<li className="list-group-item text-light bg-transparent border-0">
										<div className="row no-gutters align-items-center">
											<div className="col-auto">
												<h3><i className="bi bi-github" /></h3>
											</div>
											<div className="col ml-2">
												<p><strong>Github : </strong></p>
												<h5><a href="https://github.com/fikriomar16" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info fw-bold">github.com/fikriomar16</a></h5>
											</div>
										</div>
									</li>
									<li className="list-group-item text-light bg-transparent border-0">
										<div className="row no-gutters align-items-center">
											<div className="col-auto">
												<h3><i className="bi bi-telegram" /></h3>
											</div>
											<div className="col ml-2">
												<p><strong>Telegram : </strong></p>
												<h5><a href="https://t.me/fikriomar16" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info fw-bold">t.me/fikriomar16</a></h5>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-lg-6 my-4 my-lg-auto">
								<div className="card border-0 shadow-sm rounded-0">
									<div className="card-header border-0 shadow-sm fw-bold paragraf fs-4"><i className="bi bi-chat-left-text text-primary me-2"></i>  Hubungi Saya</div>
									<div className="card-body p-3">
										<div className="alert alert-info border-0 shadow rounded-3 d-none" role="alert" id="alertForm">
											<strong>Terima Kasih!!</strong> Pesan anda berhasil terkirim...
										</div>
										<form name="form" onSubmit={formSubmit}>
											<div className="form-floating mb-3">
												<input type="text" className="form-control" id="nama" name="nama" placeholder="Nama Anda" value={nama} onChange={(e)=>{setNama(e.target.value)}} required />
												<label htmlFor="name">Nama Lengkap Anda</label>
											</div>
											<div className="form-floating mb-3">
												<input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
												<label htmlFor="email">Alamat Email Anda</label>
											</div>
											<div className="form-floating mb-3">
												<textarea className="form-control" placeholder="Masukkan Pesan Anda" name="pesan" id="pesan" style={{height: '7.5rem'}} value={pesan} onChange={(e)=>{setPesan(e.target.value)}} required />
												<label htmlFor="message">Masukkan Pesan anda</label>
											</div>
											<div className="d-grid gap-2 col-lg-3 col-md-6 mx-auto">
												<button type="submit" className="btn btn-primary my-2 btn-kirim">
													<i className="bi bi-chat-left-text-fill" />&nbsp; Kirim
												</button>
												<button className="btn btn-primary my-2 btn-loading d-none" type="button" disabled>
													<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" /> Loading...
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-end pb-3">
					<div className="col-lg-auto my-auto">
						<Link to="/" className="text-decoration-none btn btn-sm btn-light shadow float-end">
							<i className="bi bi-arrow-right-short"></i>&nbsp; Beranda
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Kontak;
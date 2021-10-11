import React from 'react';
import foto from '../img/warna.jpg';
import qrcode from '../img/qrverif.png';
import { Link } from 'react-router-dom';

function Profil(props) {
	return (
		<div className="py-4">
			<div className="container">
				<div className="row h-100 justify-content-start pb-4">
					<div className="col-lg-auto my-auto">
						<Link to="/" className="text-decoration-none btn btn-sm btn-light shadow">
							<i className="bi bi-arrow-left-short"></i>&nbsp; Beranda
						</Link>
					</div>
				</div>
				<div className="row h-100 justify-content-center">
					<div className="col-lg my-auto">
						<h1 className="text-center text-white fw-bold fs-1 text-uppercase">
							Profil
						</h1>
						<div className="row h-100 justify-content-center pt-3 pt-lg-5">
							<div className="col-lg-9 px-5 px-lg-2">
								<h6 className="text-white lh-base paragraf teks" align="justify">
									Nama saya <strong>Mohammad Fikri Omar</strong>. Saya lulusan <strong>Universitas Teknologi Yogyakarta</strong> pada 2021 dengan mengambil jurusan <strong>Informatika</strong>. Saya aktif dalam menggunakan GNU/Linux sebagai sistem operasi dalam keseharian. Dalam membangun sebuah aplikasi website, saya biasa menggunakan framework <strong>Laravel</strong> maupun <strong>CodeIgniter</strong>. Saya juga suka belajar dan mencoba hal yang baru, terutama hal yang sedang saya pelajari saat ini yaitu sistem <em>front-end</em> menggunakan <strong>React.js</strong> dan kedepannya akan mendalami <strong>Node.js</strong> beserta ekosistemnya.
								</h6>
							</div>
						</div>
						<div className="row h-100 justify-content-center pt-3 g-0">
							<div className="col-lg-3 text-center my-auto">
								<img src={foto} alt="Foto" className="img-fluid shadow mb-3 rounded-3 fotowarna" />
							</div>
							<div className="col-lg-auto my-2 px-4 px-lg-0">
								<h4 className="fw-bold text-light paragraf mb-4 teks">Berikut biodata saya:</h4>
								<div className="row text-light justify-content-between g-0">
									<div className="col-lg-auto teks">
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Nama Lengkap : </strong>Mohammad Fikri Omar</p>
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Tempat & Tanggal Lahir : </strong>Manado, 16 Oktober 1998</p>
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Agama : </strong>Islam</p>
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Alamat : </strong>Kronggahan 1, Kranggahan, Jl. Kabupaten, Sleman, D.I.Y</p>
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Asal Universitas : </strong>Universitas Teknologi Yogyakarta</p>
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Akreditasi Universitas : </strong>B</p>
										<p className="fs-5"><i className="bi bi-caret-right-fill text-info small"></i>&nbsp;<strong>Program Studi : </strong>Informatika</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row h-100 justify-content-center py-5">
							<div className="col-lg-4 my-auto">
								<div className="card bg-transparent border-0">
									<div className="card-body">
										<div className="text-center">
											<button className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#dataVerif">
												Untuk Verifikasi Data Kelulusan Dapat Scan Di Bawah Ini
											</button>
										</div>
										<div className="collapse" id="dataVerif">
											<img src={qrcode} alt="qrcode" className="qrcode d-block mx-auto img-fluid rounded-3 shadow-sm my-4" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-center py-5">
					<div className="col-lg my-auto">
						<h1 className="text-center text-white fw-bold fs-1 text-uppercase">
							Riwayat Pendidikan
						</h1>
						<div className="row h-100 justify-content-center pt-3">
							<div className="col-lg-auto my-auto study px-4 px-lg-0">
								<div className="card card-body border-0 rounded-3 shadow">
									<div className="study-item">
										<h4>Universitas Teknologi Yogyakarta</h4>
										<h5>2015 - 2021</h5>
										<p><em>Program Studi Informatika</em></p>
									</div>
									<div className="study-item">
										<h4>Madrasah Aliyah Negeri 1 Magelang</h4>
										<h5>2012 - 2015</h5>
										<p><em>Jurusan IPA</em></p>
									</div>
									<div className="study-item">
										<h4>Sekolah Menengah Pertama Negeri 1 Kendari</h4>
										<h5>2010 - 2012</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-center py-5">
					<div className="col-lg my-auto">
						<h1 className="text-center text-white fw-bold fs-1 text-uppercase">
							Riwayat Pengalaman
						</h1>
						<div className="row h-100 justify-content-center pt-3">
							<div className="col-lg-auto my-auto study px-4 px-lg-0">
								<div className="card card-body border-0 rounded-3 shadow">
									<div className="study-item">
										<div className="text-center">
											<h5 className="fw-bold text-primary ">Pengalaman Kerja Praktik</h5>
										</div>
										<h4>Software Developer</h4>
										<h5>2018</h5>
										<p><strong>Tempat : </strong>Puskesmas 1 Mlati, Sleman</p>
										<p><em>Membuat Sistem Pengadaan Barang Berbasis Web</em></p>
									</div>
									<div className="study-item">
										<div className="text-center">
											<h5 className="fw-bold text-primary ">Pengalaman Kompetisi Nasional</h5>
										</div>
										<h4>Kompetisi Nasional Born to Protect</h4>
										<h5>2018</h5>
										<p><strong>Diselenggarakan oleh : </strong>Kemkominfo</p>
									</div>
									<div className="study-item">
										<div className="text-center">
											<h5 className="fw-bold text-primary ">Pengalaman Workshop</h5>
										</div>
										<h4>Workshop C-HACKTRACK</h4>
										<h5>2017</h5>
										<p><strong>Diselenggarakan di : </strong>Universitas Pembangunan Negeri "Veteran" Yogyakarta</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-center py-5">
					<div className="col-lg my-auto">
						<h1 className="text-center text-white fw-bold fs-1 text-uppercase">
							Keahlian
						</h1>
						<div className="row h-100 justify-content-center pt-3 text-white px-4 px-lg-0 teks">
							<div className="col-lg-auto my-auto">
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>Linux</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>Laravel</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>CodeIgniter</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>PHP</strong></p>
							</div>
							<div className="col-lg-auto my-auto">
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>JavaScript</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>Bootstrap</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>CSS</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>HTML</strong></p>
							</div>
							<div className="col-lg-auto my-auto">
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>Bash (Shell Scripting)</strong></p>
								<p className="fs-5"><i className="bi bi-caret-right text-info"></i>&nbsp;<strong>React.js (Ongoing...)</strong></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row h-100 justify-content-end pb-3">
					<div className="col-lg-auto my-auto">
						<Link to="/portfolio" className="text-decoration-none btn btn-sm btn-light shadow-lg float-end">
							<i className="bi bi-arrow-right-short"></i>&nbsp; Portfolio
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profil;
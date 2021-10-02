import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Beranda from '../pages/Beranda';
import Profil from '../pages/Profil';
import Portfolio from '../pages/Portfolio';
import Kontak from '../pages/Kontak';

function Router(props) {
	return (
		<Switch>
			<Route exact path="/">
				<Navbar><Beranda/></Navbar>
			</Route>
			<Route path="/profil">
				<Navbar><Profil/></Navbar>
			</Route>
			<Route path="/portfolio">
				<Navbar><Portfolio/></Navbar>
			</Route>
			<Route path="/kontak">
				<Navbar><Kontak/></Navbar>
			</Route>
		</Switch>
	);
}

export default Router;
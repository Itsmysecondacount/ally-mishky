import React from 'react';
import logo from '../assets/aya mishky.png';
import './Header.scss';

const Header = () => {
	return (
		<header>
			<img src={logo} alt="Logo de la empresa" />
			<nav>
				<ul>
					<li>
						<a href="#">Productos</a>
					</li>
					<li>
						<a href="#">Historia</a>
					</li>
					<li>
						<a href="#">Nosotros</a>
					</li>
					<li>
						<a href="#">Contacto</a>
					</li>
					<li>
						<a href="#">Información de la empresa</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

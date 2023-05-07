import React from 'react';
import './Header.scss';

const Header = ({ tipeBody }) => {
	return (
		<header className={`${!tipeBody && 'header-mishky'}`}>
			<h1>ALLY MISHKY</h1>
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

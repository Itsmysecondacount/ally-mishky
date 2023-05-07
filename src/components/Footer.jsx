import './Footer.scss';

function Footer() {
	return (
		<footer>
			<nav>
				<ul>
					<li>
						<a href="#">Inicio</a>
					</li>
					<li>
						<a href="#">Acerca de</a>
					</li>
					<li>
						<a href="#">Productos</a>
					</li>
					<li>
						<a href="#">Contacto</a>
					</li>
				</ul>
			</nav>
			<div className="social-media">
				<a href="#">
					<i className="fab fa-facebook"></i>
				</a>
				<a href="#">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="#">
					<i className="fab fa-instagram"></i>
				</a>
			</div>
			<p>&copy; 2023 Ally mishky. Todos los derechos reservados.</p>
		</footer>
	);
}

export default Footer;

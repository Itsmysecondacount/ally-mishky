import './Footer.scss';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

function Footer({ tipeBody }) {
	return (
		<footer className={`${!tipeBody && 'footer-mishky'}`}>
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
					<BsFacebook color={`${!!tipeBody ? '#ee4c90' : '#f3b52e'}`} />
				</a>
				<a href="#">
					<AiFillTwitterCircle color={`${!!tipeBody ? '#ee4c90' : '#f3b52e'}`} />
				</a>
				<a href="#">
					<AiFillInstagram color={`${!!tipeBody ? '#ee4c90' : '#f3b52e'}`} />
				</a>
			</div>
			<p>&copy; 2023 Ally mishky. Todos los derechos reservados.</p>
		</footer>
	);
}

export default Footer;

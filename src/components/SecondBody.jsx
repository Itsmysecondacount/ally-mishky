import React from 'react';
import mainImage from '../assets/mishkyhaya.png';
import './SecondBody.scss';

function SecondBody() {
	return (
		<section className="second-section">
			<div className="izquierda-imagen">
				<h2>Mishkyhaya</h2>
				<h3>Mermelada a base de pitahaya amarilla y cushuro</h3>
				<p>
					La pukahaya es una deliciosa y exótica mermelada elaborada con la pulpa dulce y
					jugosa de la pitahaya. Esta fruta de tonos rosados y amarillos deslumbra con su
					sabor tropical y suave aroma a flores silvestres. La textura suave y sedosa de
					la mermelada se combina perfectamente con la frescura y el crujido de las
					semillas de la pitahaya, creando una experiencia culinaria única y deliciosa
					para el paladar. Con cada cucharada, la pukahaya transporta tus sentidos a los
					mágicos paisajes de América Latina, donde la pitahaya crece en su esplendor
					natural. Disfruta de esta exquisita mermelada en tus tostadas, en postres o
					simplemente como un regalo de la naturaleza para tu paladar.
				</p>
				<div>
					<button>Comprar ahora</button>
					<button>Contactar</button>
				</div>
			</div>
			<img src={mainImage} alt="Imagen principal" />
		</section>
	);
}

export default SecondBody;

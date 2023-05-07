import React, { useState } from 'react';
import './NavHaya.scss';

const NavHaya = ({ setTipeBody }) => {
	return (
		<div className="button-haya">
			<button onClick={() => setTipeBody(true)}>Pukahaya</button>
			<button onClick={() => setTipeBody(false)}>Mishkyhaya</button>
		</div>
	);
};

export default NavHaya;

import React from 'react';
import logo from '../troll-face.png';

function Header() {
	return (
		<>
			<header>
				<img src={logo} className="troll-img" alt="" />
				<h3 className="header-title">Meme Generator</h3>
				<h4 className="header-project">React Course - Project</h4>
			</header>
		</>
	);
}

export default Header;

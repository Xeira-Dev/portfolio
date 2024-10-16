import './index.scss';
import { useState } from 'react';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	window.addEventListener('scroll', () => {
		window.scrollY !== 0 && !isScrolled && setIsScrolled(true);
		window.scrollY === 0 && isScrolled && setIsScrolled(false);
	});
	return (
		<header>
			<div className={`container ${isScrolled ? 'scrolled' : ''}`}>
				<h2>DT</h2>
				<nav>
					<ul>
						<li><a href='#projects'>Projects</a></li>
						<li><a href='#about'>About & Contact</a></li>
					</ul>
				</nav>
				<div></div>
			</div>
		</header>
	);
};

export default Navbar;

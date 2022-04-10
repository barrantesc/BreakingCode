import Icon from './icon';
import React from 'react';
import { LINKS } from '../utils/footerLinks';

function Footer() {
	return (
		<footer className='footer'>
			<Icon links={LINKS}></Icon>
			<p> © 2022 Ashley Park, Connie Barrantes, Melany Pietrowsk, Trevor Long</p>
		</footer>
	);
}

export default Footer;
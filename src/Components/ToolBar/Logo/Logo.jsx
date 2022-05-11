import React from "react";
import { Link } from "react-router-dom";
import logoMini from "../../../Assets/logoMini.png";

import "./logo.css";

export const Logo = () => {
	return (
		<Link className='logoName' to='/'>
			<p className='logoText'>Showroom</p>
			<img
				className='logoImg'
				src={logoMini}
				alt='logo 1928'
				title='1928 Showroom'
				loading='lazy'
			/>
			<p className='logoText'>Plus Size</p>
		</Link>
	);
};

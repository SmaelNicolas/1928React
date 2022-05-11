import React from "react";
import { Link } from "react-router-dom";
import logoMini from "../../../Assets/logoMini.png";
import logoEntero from "../../../Assets/logoEntero.png";

import "./logo.css";

export const Logo = () => {
	return (
		<Link className='logoName' to='/'>
			<img
				className='logoImgResponsive'
				src={logoMini}
				alt='logo 1928'
				title='1928 Showroom'
				loading='lazy'
			/>
			<img
				className='logoImg'
				src={logoEntero}
				alt='logo 1928'
				title='1928 Showroom'
				loading='lazy'
			/>
		</Link>
	);
};

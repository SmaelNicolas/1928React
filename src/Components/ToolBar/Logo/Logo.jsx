import React from "react";
import { Link } from "react-router-dom";

import "./logo.css";

export const Logo = () => {
	return (
		<Link className='logoName' to='/'>
			1928Showroom
		</Link>
	);
};

import React from "react";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Helmet } from "react-helmet-async";

import "./jean.css";

export const Jeans = () => {
	return (
		<>
			<Helmet>
				<title>1928 Showroom - Jeans</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='' />
			</Helmet>
			<div className='sectionContainer'>
				<Divider />
				<Divider />
				<ItemShowcase value={"jean"} />
				<Divider />
				<Divider />
				<ButtonMore
					title={"Ver todos los productos"}
					path='productos'
				/>
				<Divider />
				<Divider />
			</div>
		</>
	);
};

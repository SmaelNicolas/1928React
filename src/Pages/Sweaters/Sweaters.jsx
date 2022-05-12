import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { Helmet } from "react-helmet-async";

import "./sweaters.css";

export const Sweaters = () => {
	return (
		<>
			<Helmet>
				<title>1928 Showroom - Sweaters</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='' />
			</Helmet>
			<div className='sectionContainer'>
				<Divider />
				<h1 className='hiddenH1'>
					1928 Showroom ropa mujer jeans remeras sweaters camperas
					accesorios
				</h1>
				<h2 className='title'>SWEATERS</h2>
				<Divider />
				<ItemShowcase value={"sweater"} />
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

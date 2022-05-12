import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { Helmet } from "react-helmet-async";

import "./accesorios.css";

export const Accesorios = () => {
	return (
		<>
			<Helmet>
				<title>1928 Showroom - Accesorios</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='/' />
			</Helmet>
			<div className='sectionContainer'>
				<Divider />
				<h1 className='title'>ACCESORIOS</h1>
				<Divider />
				<ItemShowcase value={"accesorio"} />
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

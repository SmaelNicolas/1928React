import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { SwiperHome } from "../../Components/SwiperHome/SwiperHome";
import { Helmet } from "react-helmet-async";

import "./home.css";

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>1928 Showroom</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='' />
			</Helmet>
			<div className='homeContainer'>
				<h1 className='hiddenH1'>
					1928 Showroom ropa mujer jeans remeras sweaters camperas
					accesorios
				</h1>
				<SwiperHome />
				<Divider />
				<Divider />
				<h2 className='homeTitle'>DESTACADOS</h2>
				<Divider />

				<ItemShowcase value={"destacado"} />
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

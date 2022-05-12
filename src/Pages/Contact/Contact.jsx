import React from "react";
import { ContactDirectInfo } from "../../Components/ContactDirectInfo/ContactDirectInfo";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import { Divider } from "../../Components/Divider/Divider";
import { Helmet } from "react-helmet-async";

import "./contact.css";

export const Contact = () => {
	return (
		<>
			<Helmet>
				<title>1928 Showroom - Contacto</title>
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
				<h2 className='title'>CONTACTANOS</h2>
				<Divider />
				<ContactDirectInfo />
				<Divider />
				<Divider />
				<ContactForm />
			</div>
		</>
	);
};

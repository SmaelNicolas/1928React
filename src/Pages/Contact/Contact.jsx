import React from "react";
import { ContactDirectInfo } from "../../Components/ContactDirectInfo/ContactDirectInfo";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import { Divider } from "../../Components/Divider/Divider";

import "./contact.css";

export const Contact = () => {
	return (
		<div className='contactContainer'>
			<Divider />
			<ContactDirectInfo />
			<Divider />
			<Divider />
			<ContactForm />
			<Divider />
		</div>
	);
};

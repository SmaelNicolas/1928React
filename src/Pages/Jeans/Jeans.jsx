import React from "react";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";

import "./jean.css";

export const Jeans = ({ value }) => {
	return (
		<div className='jeanContainer'>
			<Divider />
			<Divider />
			<ItemShowcase value={value} />
			<Divider />
			<Divider />
			<ButtonMore />
			<Divider />
			<Divider />
		</div>
	);
};

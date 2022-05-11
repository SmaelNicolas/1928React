import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";

export const Remeras = ({ value }) => {
	return (
		<div className='remerasContainer'>
			<Divider />
			<Divider />
			<ItemShowcase value={value} />
			<Divider />
			<Divider />
			<ButtonMore title={"Ver todos los productos"} path='productos' />
			<Divider />
			<Divider />
		</div>
	);
};

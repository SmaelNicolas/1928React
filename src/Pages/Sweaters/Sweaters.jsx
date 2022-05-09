import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";

export const Sweaters = ({ value }) => {
	return (
		<div className='sweatersContainer'>
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

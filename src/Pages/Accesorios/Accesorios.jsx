import React, { useState } from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import dataDummy from "../../Data/dummyData";

export const Accesorios = () => {
	const [data] = useState(dataDummy);

	return (
		<div className='accesoriosContainer'>
			<Divider />
			<Divider />
			<ItemShowcase data={data} />
			<Divider />
			<Divider />
			<ButtonMore />
			<Divider />
			<Divider />
		</div>
	);
};

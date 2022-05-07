import React, { useState } from "react";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import dataDummy from "../../Data/dummyData";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";

import "./jean.css";

export const Jeans = () => {
	const [data] = useState(dataDummy);

	return (
		<div className='jeanContainer'>
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

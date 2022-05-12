import React from "react";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";

import "./todos.css";

export const Todos = () => {
	return (
		<div className='todosContainer'>
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<ItemShowcase value={""} />
			<Divider />
			<Divider />
		</div>
	);
};

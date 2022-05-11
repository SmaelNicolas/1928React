import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./todos.css";

export const Todos = () => {
	return (
		<div className='todosContainer'>
			<Divider />
			<Divider />
			<ButtonMore title='INICIO' path='/' icon={<ArrowBackIcon />} />
			<Divider />
			<Divider />
			<ItemShowcase value={""} />
			<Divider />
			<Divider />
		</div>
	);
};

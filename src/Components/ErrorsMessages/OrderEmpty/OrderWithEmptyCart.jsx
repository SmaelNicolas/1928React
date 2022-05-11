import React from "react";
import { ButtonMore } from "../../ButtonMore/ButtonMore";
import { Divider } from "../../Divider/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import emptyGif from "../../../Assets/empty.gif";

import "./orderWithEmptyCart.css";

export const OrderWithEmptyCart = () => {
	return (
		<div className='ordersContainerEmpty'>
			<Divider />
			<Divider />
			<ButtonMore title='INICIO' path='/' icon={<ArrowBackIcon />} />
			<Divider />
			<img
				className='emptyOrderImg'
				src={emptyGif}
				alt='empty img'
				title='empty'
			/>
			<Divider />
			<p className='ordersEmptyText'>Carrito vacio!</p>
			<Divider />
			<p className='ordersEmptyText'> Seleccioná algún producto</p>
		</div>
	);
};

import React from "react";
import { Divider } from "../../Divider/Divider";
import emptyGif from "../../../Assets/empty.gif";

import "./orderWithEmptyCart.css";

export const OrderWithEmptyCart = () => {
	return (
		<div className='ordersContainerEmpty'>
			<Divider />
			<Divider />
			<Divider />
			<img
				className='emptyOrderImg'
				src={emptyGif}
				alt='empty img'
				title='Por favor agrega un producto'
			/>
			<Divider />
			<p className='ordersEmptyText'>Carrito vacio!</p>
			<Divider />
			<p className='ordersEmptyText'> Seleccioná algún producto</p>
		</div>
	);
};

import React, { useContext } from "react";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Divider } from "../Divider/Divider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../../Context/CartContext";

import "./itemCard.css";

export const ItemCard = ({ item, hide }) => {
	const { addItemToCart } = useContext(CartContext);

	return (
		<div className='card'>
			<Paper elevation={6}>
				<div className='cardContainer'>
					<img className='cardImg' src={item.img} alt='' />
					<div className='cardTitle'>{item.title}</div>
					<div className='cardPrice'>$ {item.price} </div>
					<Divider />
					{!hide && (
						<Button
							variant='contained'
							size='small'
							endIcon={<AddShoppingCartIcon />}
							onClick={() => addItemToCart(item)}
						>
							Agregar al carrito
						</Button>
					)}
					<Divider />
				</div>
			</Paper>
		</div>
	);
};

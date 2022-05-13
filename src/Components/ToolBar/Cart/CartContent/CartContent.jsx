import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

import { ListItemInCart } from "./ListItem/ListItemInCart";

import { CartContext } from "../../../../Context/CartContext";
import { useNavigate } from "react-router-dom";

import "./cartContent.css";

export const CartContent = ({ anchor, toggleDrawer, cart }) => {
	const { quantityItems, emptyCart } = useContext(CartContext);

	const [items] = useState(quantityItems());
	const navigate = useNavigate();

	const handleClickFinish = () => {
		navigate("order");
		window.scrollTo(0, 0);
	};

	return (
		<Box
			className='cartContentContainer'
			role='presentation'
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List
				sx={{
					width: "100%",
				}}
			>
				<ListItem className='listItemCartContant'>
					<CloseIcon
						fontSize='large'
						onClick={toggleDrawer(anchor, false)}
					/>
					<RemoveShoppingCartIcon
						fontSize='large'
						onClick={() => emptyCart()}
					/>
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItemInCart cart={cart} toggleDrawer={toggleDrawer} />
			</List>
			<Button
				variant='contained'
				endIcon={<PriceCheckIcon />}
				disabled={items === 0}
				onClick={() => handleClickFinish()}
				onFocus={toggleDrawer(anchor, false)}
			>
				IR A FINALIZAR COMPRA
			</Button>
		</Box>
	);
};

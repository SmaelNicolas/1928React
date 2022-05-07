import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

import { ListItemInCart } from "./ListItem/ListItemInCart";

import "./cartContent.css";

export const CartContent = ({ anchor, toggleDrawer, cart }) => {
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
				<ListItem alignItems='flex-end'>
					<CloseIcon
						fontSize='large'
						onClick={toggleDrawer(anchor, false)}
					/>
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItemInCart cart={cart} toggleDrawer={toggleDrawer} />
			</List>
			<Button
				variant='contained'
				className='buttonFinishCart'
				endIcon={<PriceCheckIcon />}
				onClick={() => console.log("TERMINAR COMPRA")}
			>
				IR A FINALIZAR COMPRA
			</Button>
		</Box>
	);
};

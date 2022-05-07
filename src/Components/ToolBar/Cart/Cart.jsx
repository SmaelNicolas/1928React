import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// ----------------------
import Drawer from "@mui/material/Drawer";
import { CartContent } from "./CartContent/CartContent";
import { CartContext } from "../../../Context/CartContext";

export const Cart = () => {
	const { addedToCart, quantityItems, getAllItemsFromCart } =
		useContext(CartContext);
	const [open, setOpen] = useState(false);
	const [cart, setCart] = useState(getAllItemsFromCart());
	const [cantItem, setCantItems] = useState(quantityItems());

	const toggleDrawer = (anchor, value) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen({ ...open, [anchor]: value });
	};

	const StyledBadge = styled(Badge)(({ theme }) => ({
		"& .MuiBadge-badge": {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}));

	useEffect(() => {
		setCart(getAllItemsFromCart());
		setCantItems(quantityItems());
	}, [addedToCart]);

	return (
		<div>
			<React.Fragment key={"right"}>
				<IconButton
					onClick={toggleDrawer("right", true)}
					aria-label='cart'
				>
					<StyledBadge badgeContent={cantItem} color='primary'>
						<ShoppingCartIcon />
					</StyledBadge>
				</IconButton>
				<Drawer
					anchor={"right"}
					open={open["right"]}
					onClose={toggleDrawer("right", false)}
				>
					<CartContent
						anchor={"right"}
						toggleDrawer={toggleDrawer}
						cart={cart}
					/>
				</Drawer>
			</React.Fragment>
		</div>
	);
};

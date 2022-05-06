import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// ----------------------
import Drawer from "@mui/material/Drawer";
import { CartContent } from "./CartContent/CartContent";

export const Cart = () => {
	const [open, setOpen] = useState(false);

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

	return (
		<div>
			<React.Fragment key={"right"}>
				<IconButton
					onClick={toggleDrawer("right", true)}
					aria-label='cart'
				>
					<StyledBadge badgeContent={4} color='primary'>
						<ShoppingCartIcon />
					</StyledBadge>
				</IconButton>
				<Drawer
					anchor={"right"}
					open={open["right"]}
					onClose={toggleDrawer("right", false)}
				>
					<CartContent anchor={"right"} toggleDrawer={toggleDrawer} />
				</Drawer>
			</React.Fragment>
		</div>
	);
};

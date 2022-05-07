import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Stack, TextField } from "@mui/material";
import { CartContext } from "../../../../../Context/CartContext";

export const ListItemInCart = ({ cart, toggleDrawer }) => {
	const { deleteItemInCart } = useContext(CartContext);

	return cart.map((item) => (
		<ListItem alignItems='flex-start' key={item.id}>
			<ListItemAvatar>
				<Avatar
					alt='Travis Howard'
					src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/141/936/products/d5ac0e9b-699f-442e-bde3-49a38312b2ee-a9723da1bacd0e0b6516480452162455-320-0.jpeg'
				/>
			</ListItemAvatar>
			<ListItemText
				primary={
					<Stack direction='column' spacing={1}>
						<TextField
							id='outlined-read-only-input'
							label='Item'
							value={`${item.title} x ${item.quantity}`}
							InputProps={{
								readOnly: true,
							}}
						/>
						<Chip
							icon={<AttachMoneyIcon />}
							label={item.price}
							variant='outlined'
							size='small'
						/>
						<Button
							variant='outlined'
							startIcon={<DeleteIcon />}
							size='small'
							onClick={() => deleteItemInCart(item)}
						>
							Eliminar
						</Button>
					</Stack>
				}
			/>
		</ListItem>
	));
};

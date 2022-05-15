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
				<Avatar alt='Travis Howard' src={item.img} />
			</ListItemAvatar>
			<ListItemText
				primary={
					<Stack direction='column' spacing={1}>
						<TextField
							id='outlined-read-only-input'
							label='Item'
							value={`${item.title.toUpperCase()} x ${
								item.quantity
							}`}
							InputProps={{
								readOnly: true,
							}}
						/>
						<Chip
							icon={<AttachMoneyIcon />}
							label={item.price * item.quantity}
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

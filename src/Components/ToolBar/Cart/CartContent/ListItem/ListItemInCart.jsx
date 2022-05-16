import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Stack, TextField } from "@mui/material";
import { CartContext } from "../../../../../Context/CartContext";

export const ListItemInCart = ({ cart, toggleDrawer }) => {
	const { deleteItemInCart } = useContext(CartContext);

	return cart.map((item, index) => (
		<ListItem alignItems='flex-start' key={index + item.id}>
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
						<Box>
							<Chip
								icon={<AttachMoneyIcon />}
								label={item.price * item.quantity}
								variant='outlined'
								size='small'
							/>
							{item.type !== "jean" ? (
								<Chip
									style={{
										backgroundColor: item.colorSelected,
										color: "white",
									}}
									label='Color Elegido'
									variant='outlined'
									size=''
								/>
							) : (
								<Chip
									icon={<InfoIcon />}
									label={`Talle ${item.sizeSelected}`}
									variant='outlined'
									size='small'
								/>
							)}
						</Box>

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

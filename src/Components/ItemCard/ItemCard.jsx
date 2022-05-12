import React, { useContext } from "react";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Divider } from "../Divider/Divider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../../Context/CartContext";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import "./itemCard.css";

export const ItemCard = ({ item, hide }) => {
	const { addItemToCart } = useContext(CartContext);

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className='card'>
			<Paper elevation={6}>
				<div className='cardContainer'>
					<img
						className='cardImg'
						src={item.img}
						alt='img producto'
						title={item.title.toUpperCase()}
						loading='lazy'
						onClick={handleOpen}
					/>
					<div className='cardTitle'>{item.title.toUpperCase()}</div>
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
				<div>
					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={open}>
							<Box className='boxModal'>
								<div
									id='transition-modal-description'
									sx={{ mt: 2 }}
								>
									<img
										className='cardImgOnModal'
										src={item.img}
										alt='img producto'
										title={item.title}
										loading='lazy'
									/>
								</div>
							</Box>
						</Fade>
					</Modal>
				</div>
			</Paper>
		</div>
	);
};

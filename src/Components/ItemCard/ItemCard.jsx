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
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CloseIcon from "@mui/icons-material/Close";

import imgBack from "../../Assets/logoBck.jpg";

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
					{item.stock === "false" && (
						<div className='cardStock'>SIN STOCK</div>
					)}
					<img
						className='cardImg'
						src={item.img === "logo" ? imgBack : item.img}
						alt='img producto'
						title={item.title.toUpperCase()}
						loading='lazy'
						onClick={handleOpen}
					/>
					<div className='cardTitle'>{item.title.toUpperCase()}</div>
					<div className='cardPrice'>
						<AttachMoneyIcon />
						<p className='cardCreditText'>{item.price}</p>
					</div>
					<div className='cardPayment'>
						<CreditScoreIcon />
						<p className='cardPaymentText'>3 Cuotas sin interés</p>
					</div>
					<div className='cardPayment'>
						<CurrencyExchangeIcon />
						<p className='cardPaymentText'>
							{item.discount}% Efectivo y/o Transferencia
						</p>
					</div>
					<Divider />
					{!hide && (
						<Button
							variant='contained'
							size='small'
							endIcon={<AddShoppingCartIcon />}
							onClick={() => addItemToCart(item)}
							className={
								item.stock === "false" ? "hideButton" : ""
							}
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
								<CloseIcon
									className='iconCloseModal'
									onClick={handleClose}
								/>
								<div
									id='transition-modal-description'
									sx={{ mt: 2 }}
								>
									<img
										className='cardImgOnModal'
										src={
											item.img === "logo"
												? imgBack
												: item.img
										}
										alt='img producto'
										title={item.title}
										loading='lazy'
									/>
								</div>
								<Divider />
								<div>{item.info}</div>
							</Box>
						</Fade>
					</Modal>
				</div>
			</Paper>
		</div>
	);
};

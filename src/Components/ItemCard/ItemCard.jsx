import React, { useContext, useState } from "react";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Divider } from "../Divider/Divider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../../Context/CartContext";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Snackbar from "@mui/material/Snackbar";

import "./itemCard.css";
import { SwiperCardImages } from "./SwiperCardImages/SwiperCardImages";

export const ItemCard = ({ item, hide }) => {
	const { addItemToCart } = useContext(CartContext);
	const [colorsArray] = useState(item.colorsAvailable.split(" "));
	const [tallesArray] = useState(item.sizesAvailable.split(" "));
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	const [openSnack, setOpenSnack] = useState({
		open: false,
		vertical: "top",
		horizontal: "right",
	});
	const [openSnackError, setOpenSnackError] = useState({
		open2: false,
		vertical: "top",
		horizontal: "right",
	});

	const { vertical, horizontal, open } = openSnack;
	const { open2 } = openSnackError;

	const handleSnackBar = () => {
		setOpenSnack({ open: true, vertical: "top", horizontal: "right" });
		setTimeout(() => {
			setOpenSnack({ open: false, vertical: "top", horizontal: "right" });
		}, 1800);
	};
	const handleSnackBarError = () => {
		setOpenSnackError({
			open2: true,
			vertical: "top",
			horizontal: "center",
		});
		setTimeout(() => {
			setOpenSnackError({
				open2: false,
				vertical: "top",
				horizontal: "center",
			});
		}, 1800);
	};

	const createAndAddProduct = (item) => {
		let newProduct = {
			id: item.id,
			description: item.description,
			img: item.img,
			info: item.info,
			outstanding: item.outstanding,
			price: parseInt(item.price),
			quantity: 1,
			title: item.title,
			type: item.type,
			discount: item.discount,
			stock: item.stock,
			colorsAvailable: item.colorsAvailable,
			colorSelected: color,
			sizesAvailable: item.sizesAvailable,
			sizeSelected: size,
		};
		handleSnackBar();
		addItemToCart(newProduct);
	};

	const handleAddItem = (item) => {
		if (item.type !== "jean") {
			color === "" ? handleSnackBarError() : createAndAddProduct(item);
		}
		if (item.type === "jean") {
			size === "" ? handleSnackBarError() : createAndAddProduct(item);
		}
	};

	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				message={`${item.title} Agregado!`}
				key={1}
				className='snackbarsucces'
			/>
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open2}
				message='?? Elegi talle / color !'
				key={2}
				className='snackbarError'
			/>
			<div className='card'>
				<Paper elevation={6}>
					<div className='cardContainer'>
						{item.stock === "false" && (
							<div className='cardStock'>SIN STOCK</div>
						)}
						<SwiperCardImages item={item} />
						<div className='cardTitle'>
							{item.title.toUpperCase()}
						</div>
						<div className='cardPrice'>
							<AttachMoneyIcon />
							<p className='cardCreditText'>{item.price}</p>
						</div>
						{!hide && item.type !== "jean" ? (
							<div className='colorsContainer'>
								<select
									className='selector'
									onChange={(e) => setColor(e.target.value)}
								>
									<option value=''>Color</option>
									{colorsArray.map((color) => (
										<option key={color} value={color}>
											{color.toUpperCase()}
										</option>
									))}
								</select>
							</div>
						) : (
							!hide && (
								<div className='colorsContainer'>
									<select
										className='selector'
										onChange={(e) =>
											setSize(e.target.value)
										}
										value={size}
									>
										<option value=''>Talle</option>
										{tallesArray.map((talle) => (
											<option key={talle} value={talle}>
												{talle}
											</option>
										))}
									</select>
								</div>
							)
						)}
						<div className='cardPayment'>
							<CreditScoreIcon />
							<p className='cardPaymentText'>
								3 Cuotas sin inter??s
							</p>
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
								onClick={() => handleAddItem(item)}
								className={
									item.stock === "false" ? "hideButton" : ""
								}
							>
								Agregar al carrito
							</Button>
						)}
						<Divider />
					</div>
				</Paper>
			</div>
		</>
	);
};

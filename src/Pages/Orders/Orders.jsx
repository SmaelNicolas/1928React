import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Helmet } from "react-helmet-async";

import "./orders.css";
import { CartContext } from "../../Context/CartContext";
import { ItemCard } from "../../Components/ItemCard/ItemCard";
import { useNavigate } from "react-router-dom";
import { OrderWithEmptyCart } from "../../Components/ErrorsMessages/OrderEmpty/OrderWithEmptyCart";
import Swal from "sweetalert2";

export const Orders = () => {
	const { cart, totalPrice, quantityItems, emptyCart, addedToCart } =
		useContext(CartContext);

	const form = useRef();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [adress, setAdress] = useState("");
	const [city, setCity] = useState("");
	const [envio, setEnvio] = useState("");
	const [cupon, setCupon] = useState("");
	const [msg, setMsg] = useState("");
	const [cashOut, setCashOut] = useState("");
	const [activeStep, setActiveStep] = useState(0);
	const [empty, setEmpty] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		quantityItems() > 0 ? setEmpty(false) : setEmpty(true);
	}, [addedToCart, quantityItems]);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"web_service",
				"template_z6rcw5m",
				form.current,
				"6Gf8i5hRdd3vUZJI8"
			)
			.then(
				() => {
					let timerInterval;
					Swal.fire({
						title: " Gracias por tu Compra ",
						html: "En breve nos comunicaremos con vos!",
						timer: 4000,
						timerProgressBar: true,
						didOpen: () => {
							Swal.showLoading();
						},
						willClose: () => {
							clearInterval(timerInterval);
						},
					}).then(() => {
						emptyCart();
						navigate("/");
					});
				},
				() => {
					let timerInterval;
					Swal.fire({
						title: "Hubo un error",
						html: "Por favor intenta nuevamente",
						timer: 4000,
						timerProgressBar: true,
						didOpen: () => {
							Swal.showLoading();
						},
						willClose: () => {
							clearInterval(timerInterval);
						},
					});
				}
			);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const disabledFirst = () => {
		return !(name !== "" && phone !== "" && email !== "");
	};

	const disabledSecond = () => {
		return !(envio !== "");
	};

	const disabledThird = () => {
		return !(cashOut !== "");
	};

	return (
		<>
			<Helmet>
				<title>1928 Showroom - Orden</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='' />
			</Helmet>
			{empty ? (
				<OrderWithEmptyCart />
			) : (
				<div className='ordersContainer'>
					<form
						ref={form}
						onSubmit={sendEmail}
						className='contactForm'
					>
						<Box sx={{ maxWidth: 400 }}>
							<Stepper
								activeStep={activeStep}
								orientation='vertical'
							>
								<Step>
									<StepLabel>
										Nombre - Telefono - Email - Dirección
									</StepLabel>
									<StepContent>
										<TextField
											id='name'
											label={
												name !== ""
													? ""
													: "Nombre Completo"
											}
											value={name !== "" ? name : ""}
											variant='outlined'
											required={true}
											margin='dense'
											fullWidth
											type='text'
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
										<TextField
											id='street'
											label={
												adress !== ""
													? ""
													: "Calle - Número - Piso - Dpto"
											}
											value={adress !== "" ? adress : ""}
											variant='outlined'
											required={true}
											margin='dense'
											fullWidth
											type='text'
											onChange={(e) =>
												setAdress(e.target.value)
											}
										/>
										<TextField
											id='adress'
											label={
												city !== ""
													? ""
													: "Ciudad - Localidad"
											}
											value={city !== "" ? city : ""}
											variant='outlined'
											required={true}
											margin='dense'
											fullWidth
											type='text'
											onChange={(e) =>
												setCity(e.target.value)
											}
										/>
										<TextField
											id='phone'
											label={
												phone !== "" ? "" : "Telefono"
											}
											value={phone !== "" ? phone : ""}
											variant='outlined'
											required={true}
											margin='dense'
											fullWidth
											type='text'
											onChange={(e) =>
												setPhone(e.target.value)
											}
										/>
										<TextField
											id='email'
											label={email !== "" ? "" : "Email"}
											value={email !== "" ? email : ""}
											variant='outlined'
											required={true}
											margin='dense'
											fullWidth
											type='email'
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant='contained'
													onClick={handleNext}
													sx={{ mt: 1, mr: 1 }}
													disabled={disabledFirst()}
												>
													Continuar
												</Button>
											</div>
										</Box>
									</StepContent>
								</Step>
								<Step>
									<StepLabel>Entrega</StepLabel>
									<StepContent>
										<FormControl
											required
											sx={{ m: 2, minWidth: 220 }}
										>
											<InputLabel id='form-entrega'>
												Entrega
											</InputLabel>
											<Select
												labelId='form-entrega'
												id='entrega'
												value={envio}
												label='Entrega *'
												onChange={(e) =>
													setEnvio(e.target.value)
												}
											>
												<MenuItem
													value={
														"Retiro por el showroom"
													}
												>
													Retiro por el showroom
												</MenuItem>
												<MenuItem
													value={"Envio a domicilio"}
												>
													Envio a domicilio
												</MenuItem>
											</Select>
										</FormControl>
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant='contained'
													onClick={handleNext}
													sx={{ mt: 1, mr: 1 }}
													disabled={disabledSecond()}
												>
													Continuar
												</Button>
												<Button
													onClick={handleBack}
													sx={{ mt: 1, mr: 1 }}
												>
													Atras
												</Button>
											</div>
										</Box>
									</StepContent>
								</Step>
								<Step>
									<StepLabel>Forma de Pago</StepLabel>
									<StepContent>
										<FormControl
											required
											sx={{ m: 2, minWidth: 220 }}
										>
											<InputLabel id='form-entrega'>
												Pago
											</InputLabel>
											<Select
												labelId='form-entrega'
												id='entrega'
												value={cashOut}
												label='Entrega *'
												onChange={(e) =>
													setCashOut(e.target.value)
												}
											>
												<MenuItem value={"Efectivo"}>
													Efectivo
												</MenuItem>
												<MenuItem
													value={"Tarjeta Debito"}
												>
													Tarjeta Debito
												</MenuItem>
												<MenuItem
													value={"Tarjeta Credito"}
												>
													Tarjeta Credito
												</MenuItem>
												<MenuItem
													value={"Transferencia"}
												>
													Transferencia
												</MenuItem>
												<MenuItem
													value={"QR / Link de pago"}
												>
													QR / Link de pago
												</MenuItem>
											</Select>
										</FormControl>
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant='contained'
													onClick={handleNext}
													sx={{ mt: 1, mr: 1 }}
													disabled={disabledThird()}
												>
													Continuar
												</Button>
												<Button
													onClick={handleBack}
													sx={{ mt: 1, mr: 1 }}
												>
													Atras
												</Button>
											</div>
										</Box>
									</StepContent>
								</Step>
								<Step>
									<StepLabel>Cupon - Mensaje</StepLabel>
									<StepContent>
										<TextField
											id='cupon'
											label={
												cupon !== ""
													? ""
													: "Si tenés un cupon , ingresalo!"
											}
											value={cupon !== "" ? cupon : ""}
											variant='outlined'
											required={false}
											margin='dense'
											fullWidth
											type='text'
											onChange={(e) =>
												setCupon(e.target.value)
											}
										/>
										<TextField
											id='message'
											label={
												msg !== ""
													? ""
													: "Mensaje opcional"
											}
											value={msg !== "" ? msg : ""}
											multiline
											rows={4}
											required={false}
											margin='dense'
											className='messageContainer'
											onChange={(e) =>
												setMsg(e.target.value)
											}
										/>
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant='contained'
													onClick={handleNext}
													sx={{ mt: 1, mr: 1 }}
													disabled={disabledFirst()}
												>
													Continuar
												</Button>
											</div>
										</Box>
									</StepContent>
								</Step>
								<Step>
									<StepLabel>Enviar</StepLabel>
									<StepContent>
										<input
											className='inputHidden'
											name='user_name'
											defaultValue={name}
										/>
										<input
											className='inputHidden'
											name='user_phone'
											defaultValue={phone}
										/>
										<input
											className='inputHidden'
											name='user_adress'
											defaultValue={adress}
										/>
										<input
											className='inputHidden'
											name='user_city'
											defaultValue={city}
										/>
										<input
											className='inputHidden'
											name='user_email'
											defaultValue={email}
										/>
										<input
											className='inputHidden'
											name='user_cashout'
											defaultValue={cashOut}
										/>
										<input
											className='inputHidden'
											name='user_envio'
											defaultValue={envio}
										/>
										<input
											className='inputHidden'
											name='user_cupon'
											defaultValue={
												cupon === ""
													? "No ingreso Cupon"
													: cupon
											}
										/>
										<input
											className='inputHidden'
											name='user_msg'
											defaultValue={
												msg === ""
													? "No ingreso mensaje"
													: msg
											}
										/>
										<input
											className='inputHidden'
											name='user_cart'
											defaultValue={cart.map(
												(item) =>
													`${item.title} x${
														item.quantity
													} = $ ${
														item.quantity *
														item.price
													} ||`
											)}
										/>
										<input
											className='inputHidden'
											name='user_totalprice'
											defaultValue={totalPrice()}
										/>
										<input
											className='inputHidden'
											name='user_totalproducts'
											defaultValue={quantityItems()}
										/>
										<div className='spacer'></div>
										<Box sx={{ mb: 2 }}>
											<div>
												<Button
													variant='contained'
													endIcon={<SendIcon />}
													sx={{ mt: 1, mr: 1 }}
													type='submit'
													onClick={handleNext}
												>
													Enviar
												</Button>
												<Button
													onClick={handleBack}
													sx={{ mt: 1, mr: 1 }}
												>
													Atras
												</Button>
											</div>
										</Box>
									</StepContent>
								</Step>
							</Stepper>
						</Box>
					</form>
					<h1> Tus Productos</h1>
					<div className='itemShowcaseContainer'>
						{cart.map((item) => (
							<ItemCard item={item} hide={true} key={item.id} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

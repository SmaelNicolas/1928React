import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "./contactForm.css";

export const ContactForm = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [activeStep, setActiveStep] = useState(0);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"web_service",
				"template_py58b3d",
				form.current,
				"6Gf8i5hRdd3vUZJI8"
			)
			.then(
				() => {
					Swal.fire({
						title: "Mensaje Enviado 💌",
						text: `Gracias ${name} , en breve te contactaremos!`,
						imageUrl: "https://i.ibb.co/58rbvCQ/Logo.jpg",
						imageWidth: 200,
						imageHeight: 200,
						imageAlt: "logo",
					});
				},
				() => {
					Swal.fire({
						title: "Error en el mensaje",
						text: `Algo salio mal, por favor intenta denuevo`,
						imageUrl: "https://i.ibb.co/58rbvCQ/Logo.jpg",
						imageWidth: 200,
						imageHeight: 200,
						imageAlt: "logo",
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
		return !(msg !== "");
	};

	return (
		<form ref={form} onSubmit={sendEmail} className='contactForm'>
			<Box sx={{ maxWidth: 400 }}>
				<Stepper activeStep={activeStep} orientation='vertical'>
					<Step>
						<StepLabel>Nombre - Telefono - Email</StepLabel>
						<StepContent>
							<TextField
								id='name'
								label={name !== "" ? "" : "Nombre Completo"}
								value={name !== "" ? name : ""}
								variant='outlined'
								required={true}
								margin='dense'
								fullWidth
								type='text'
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								id='phone'
								label={phone !== "" ? "" : "Telefono"}
								value={phone !== "" ? phone : ""}
								variant='outlined'
								required={true}
								margin='dense'
								fullWidth
								type='text'
								onChange={(e) => setPhone(e.target.value)}
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
								onChange={(e) => setEmail(e.target.value)}
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
						<StepLabel>Mensaje</StepLabel>
						<StepContent>
							<TextField
								id='message'
								label={msg !== "" ? "" : "Mensaje"}
								value={msg !== "" ? msg : ""}
								multiline
								rows={4}
								required={true}
								margin='dense'
								className='messageContainer'
								onChange={(e) => setMsg(e.target.value)}
							/>
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
								name='user_email'
								defaultValue={email}
							/>
							<input
								className='inputHidden'
								name='message'
								defaultValue={msg}
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
	);
};

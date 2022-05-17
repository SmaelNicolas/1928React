import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./mailchimpSubscriber.css";

export const MailchimpSubscribe = () => {
	const [value, setValue] = useState("");

	return (
		<div id='mc_embed_signup'>
			<form
				action='https://gmail.us9.list-manage.com/subscribe/post?u=449c4c62c23052906e9141a03&amp;id=11bd3edb99'
				method='post'
				id='mc-embedded-subscribe-form'
				name='mc-embedded-subscribe-form'
				className='validate'
				noValidate
			>
				<div className='formSubscriberContainer'>
					<h2 className='title formTitle'>
						Recibi info y descuentos extras!
					</h2>
					<div className='formLabelContainer'>
						<TextField
							type='email'
							label='Dejanos tu Email'
							variant='filled'
							name='EMAIL'
							className='required email'
							id='mce-EMAIL'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<div hidden={true}>
						<input type='hidden' name='tags' value='12520243' />
					</div>
					<div
						style={{ position: "absolute", left: "-5000px" }}
						aria-hidden='true'
					>
						<input
							type='text'
							name='b_449c4c62c23052906e9141a03_11bd3edb99'
							tabIndex='-1'
							value=''
							readOnly
						/>
					</div>
					<div className='ButtonSubscribe'>
						<Button
							variant='contained'
							endIcon={<SendIcon />}
							type='submit'
							name='subscribe'
							id='mc-embedded-subscribe'
						>
							Suscribirse
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

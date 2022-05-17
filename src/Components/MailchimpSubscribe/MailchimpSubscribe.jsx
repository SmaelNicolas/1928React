import React, { useState } from "react";
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
				target='_blank'
				noValidate
			>
				<div
					className='formSubscriberContainer'
					id='mc_embed_signup_scroll'
				>
					<h2>Recibi info y descuentos extras!</h2>
					<div className='mc-field-group'>
						<label htmlFor='mce-EMAIL'>
							Email Address <span className='asterisk'>*</span>
						</label>
						<input
							type='email'
							value={value}
							name='EMAIL'
							className='required email'
							id='mce-EMAIL'
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<div hidden={true}>
						<input type='hidden' name='tags' value='12520243' />
					</div>
					<div id='mce-responses' className='clear foot'>
						<div
							className='response'
							id='mce-error-response'
							style={{ display: "none" }}
						></div>
						<div
							className='response'
							id='mce-success-response'
							style={{ display: "none" }}
						></div>
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
					<div className='optionalParent'>
						<div className='clear foot'>
							<input
								type='submit'
								value='Subscribe'
								name='subscribe'
								id='mc-embedded-subscribe'
								className='button'
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

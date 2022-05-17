import React from "react";
import { Divider } from "../../Components/Divider/Divider";
import gifHeart from "../../Assets/heart.gif";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./thankYou.css";
import { Button } from "@mui/material";
import { openInNewTab } from "../../Helpers/openInNewTab";

export const ThankYou = () => {
	return (
		<div className='sectionContainer'>
			<Divider />
			<h2 className='title'>Gracias por Suscribirte</h2>
			<Divider />
			<Divider />
			<img className='heartGifThanks' src={gifHeart} alt='heart' />
			<Divider />
			<Divider />
			<h2 className='title subTitle'>
				Te invitamos a seguir explorando nuestras redes
			</h2>
			<Divider />
			<Divider />
			<Button
				className='buttonSocialsThankYou'
				variant='outlined'
				startIcon={<InstagramIcon />}
				onClick={() =>
					openInNewTab("https://www.instagram.com/1928showroom/")
				}
			>
				Instagram
			</Button>
			<Divider />

			<Button
				className='buttonSocialsThankYou'
				variant='outlined'
				startIcon={<FacebookIcon />}
				onClick={() =>
					openInNewTab("https://www.facebook.com/1928showroom/")
				}
			>
				Facebook
			</Button>
			<Divider />

			<Button
				className='buttonSocialsThankYou'
				variant='outlined'
				startIcon={<WhatsAppIcon />}
				onClick={() =>
					openInNewTab(
						"https://api.whatsapp.com/send/?phone=542914182420"
					)
				}
			>
				WhatsApp
			</Button>
		</div>
	);
};

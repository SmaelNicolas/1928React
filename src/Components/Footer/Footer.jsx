import React from "react";

import { openInNewTab } from "../../Helpers/openInNewTab";

import { Divider } from "../Divider/Divider";
import IconButton from "@mui/material/IconButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./footer.css";

export const Footer = () => {
	return (
		<div className='footerContainer'>
			<div className='footerInfo'>
				<div className='footerInfoLabels'>
					<LocalShippingIcon
						fontSize='large'
						className='footerInfoLabelsIcon'
					/>
					<div className='footerInfoLabelsText'>
						<p className='footerInfoLabelsTextTitle'>
							COMPRÁ Y RELAJATE
						</p>
						<p className='footerInfoLabelsTextSubtitle'>
							Envíos a todo el país
						</p>
					</div>
				</div>
				<div className='footerInfoLabels'>
					<CreditCardIcon
						fontSize='large'
						className='footerInfoLabelsIcon'
					/>
					<div className='footerInfoLabelsText'>
						<p className='footerInfoLabelsTextTitle'>
							PAGÁ COMO MÁS TE GUSTE
						</p>
						<p className='footerInfoLabelsTextSubtitle'>
							Tarjetas , Efectivo , QR , Link , Transferencias
						</p>
					</div>
				</div>
				<div className='footerInfoLabels'>
					<HelpOutlineIcon
						fontSize='large'
						className='footerInfoLabelsIcon'
					/>
					<div className='footerInfoLabelsText'>
						<p className='footerInfoLabelsTextTitle'>
							TENÉS DUDAS DE TU TALLE
						</p>
						<p className='footerInfoLabelsTextSubtitle'>
							Contactanos por cualquier medio y te ayudamos
						</p>
					</div>
				</div>
			</div>
			<Divider />
			<Divider />
			<div className='footerContact'>
				<div className='footerContactSections'>
					<div className='footerContactTitles'>CONTACTANOS</div>
					<div
						className='footerContactDirectInfo'
						onClick={() =>
							openInNewTab(
								"https://api.whatsapp.com/send/?phone=542914182420"
							)
						}
					>
						<IconButton aria-label='phone'>
							<PhoneIcon />
						</IconButton>
						<p className='footerContactDirectInfoText'>
							2914182420
						</p>
					</div>
					<div
						className='footerContactDirectInfo'
						onClick={() =>
							openInNewTab("mailto:1928showroom@gmail.com")
						}
					>
						<IconButton aria-label='email'>
							<AlternateEmailIcon />
						</IconButton>
						<p className='footerContactDirectInfoText'>
							1928showroom@gmail.com
						</p>
					</div>
					<div
						className='footerContactDirectInfo'
						onClick={() =>
							openInNewTab(
								"https://www.google.com.ar/maps/place/1928Showroom/@-38.7014743,-62.273796,15z/data=!4m5!3m4!1s0x0:0x1faf91a144097c96!8m2!3d-38.7014743!4d-62.273796"
							)
						}
					>
						<IconButton aria-label='place'>
							<PlaceIcon />
						</IconButton>
						<p className='footerContactDirectInfoText'>
							Panamá 1259 - Bahía Blanca
						</p>
					</div>
				</div>
				<div className='footerContactSections'>
					<div className='footerContactTitles'>REDES SOCIALES</div>
					<div className='footerContactSocialsLink'>
						<IconButton
							aria-label='instagram'
							onClick={() =>
								openInNewTab(
									"https://www.instagram.com/1928showroom/"
								)
							}
						>
							<InstagramIcon fontSize='large' />
						</IconButton>
					</div>
					<div className='footerContactSocialsLink'>
						<IconButton
							aria-label='facebook'
							onClick={() =>
								openInNewTab(
									"https://www.facebook.com/1928showroom/"
								)
							}
						>
							<FacebookIcon fontSize='large' />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

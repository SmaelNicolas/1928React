import React from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { openInNewTab } from "../../Helpers/openInNewTab";

import "./contactDirectInfo.css";

export const ContactDirectInfo = () => {
	return (
		<Stack direction='row' spacing={1} className='stackContact'>
			<Chip
				icon={<WhatsAppIcon />}
				label='2914182420'
				variant='outlined'
				className='stackContactChip'
				onClick={() =>
					openInNewTab(
						"https://api.whatsapp.com/send/?phone=542914182420"
					)
				}
			/>
			<Chip
				icon={<InstagramIcon />}
				label='@1928showroom'
				variant='outlined'
				className='stackContactChip'
				onClick={() =>
					openInNewTab("https://www.instagram.com/1928showroom/")
				}
			/>
			<Chip
				icon={<FacebookIcon />}
				label='/1928showroom'
				variant='outlined'
				className='stackContactChip'
				onClick={() =>
					openInNewTab("https://www.facebook.com/1928showroom/")
				}
			/>
			<Chip
				icon={<PlaceIcon />}
				label='Panama 1259 , Bahía Blanca'
				variant='outlined'
				className='stackContactChip'
				onClick={() =>
					openInNewTab(
						"https://www.google.com.ar/maps/place/1928Showroom/@-38.7014743,-62.273796,15z/data=!4m5!3m4!1s0x0:0x1faf91a144097c96!8m2!3d-38.7014743!4d-62.273796"
					)
				}
			/>
		</Stack>
	);
};

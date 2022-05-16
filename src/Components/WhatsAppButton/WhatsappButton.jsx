import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import imgWhatsapp from "../../Assets/wtsp.svg";
import imgWhatsapp from "../../Assets/wtspgreen.svg";

import "./whatsAppButton.css";
import { openInNewTab } from "../../Helpers/openInNewTab";

export const WhatsappButton = () => {
	return (
		<img
			src={imgWhatsapp}
			alt='wtsp redirect'
			onClick={() =>
				openInNewTab(
					"https://api.whatsapp.com/send/?phone=542914182420"
				)
			}
			className='whatsAppButton'
		/>
		// <imgWhatsapp
		// 	className='whatsAppButton'
		// 	onClick={() =>
		// 		openInNewTab(
		// 			"https://api.whatsapp.com/send/?phone=542914182420"
		// 		)
		// 	}
		// />
	);
};

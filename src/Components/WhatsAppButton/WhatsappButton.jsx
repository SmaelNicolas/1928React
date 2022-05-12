import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./whatsAppButton.css";
import { openInNewTab } from "../../Helpers/openInNewTab";

export const WhatsappButton = () => {
	return (
		<WhatsAppIcon
			className='whatsAppButton'
			onClick={() =>
				openInNewTab(
					"https://api.whatsapp.com/send/?phone=542914182420"
				)
			}
		/>
	);
};

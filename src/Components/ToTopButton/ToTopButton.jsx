import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import "./toTopButton.css";

export const ToTopButton = () => {
	return (
		<ArrowCircleUpIcon
			className='iconToTop'
			onClick={() => window.scrollTo(0, 0)}
		/>
	);
};

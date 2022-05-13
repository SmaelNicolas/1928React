import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./buttonMore.css";

export const ButtonMore = ({ title, path, icon }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/${path}`);
		window.scrollTo(0, 0);
	};

	return (
		<Button
			variant='contained'
			size='large'
			className='buttonMore'
			startIcon={icon === undefined ? <VisibilityIcon /> : icon}
			onClick={() => handleClick()}
		>
			{title}
		</Button>
	);
};

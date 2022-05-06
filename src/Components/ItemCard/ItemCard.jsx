import { Paper } from "@mui/material";
import React from "react";
import "./itemCard.css";

export const ItemCard = () => {
	return (
		<div className='card'>
			<Paper elevation={6}>
				<div className='cardContainer'>
					<img
						className='cardImg'
						src='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/141/936/products/d5ac0e9b-699f-442e-bde3-49a38312b2ee-a9723da1bacd0e0b6516480452162455-320-0.jpeg'
						alt=''
					/>
					<div className='cardTitle'> blazer mahal</div>
					<div className='cardPrice'> $ 14.835 </div>
				</div>
			</Paper>
		</div>
	);
};

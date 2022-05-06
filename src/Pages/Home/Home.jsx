import React from "react";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { SwiperHome } from "../../Components/SwiperHome/SwiperHome";
import "./home.css";

export const Home = () => {
	return (
		<div className='homeContainer'>
			<SwiperHome />
			<ItemShowcase />
		</div>
	);
};

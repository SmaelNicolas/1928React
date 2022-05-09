import React from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import { SwiperHome } from "../../Components/SwiperHome/SwiperHome";
import "./home.css";

export const Home = ({ value }) => {
	return (
		<div className='homeContainer'>
			<SwiperHome />
			<Divider />
			<Divider />
			<ItemShowcase value={value} />
			<Divider />
			<Divider />
			<ButtonMore />
			<Divider />
			<Divider />
		</div>
	);
};

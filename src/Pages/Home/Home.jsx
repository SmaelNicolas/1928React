import React, { useState } from "react";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemShowcase } from "../../Components/ItemShowcase/ItemShowcase";
import dataDummy from "../../Data/dummyData";
import { SwiperHome } from "../../Components/SwiperHome/SwiperHome";
import "./home.css";

export const Home = () => {
	const [data] = useState(dataDummy);

	return (
		<div className='homeContainer'>
			<SwiperHome />
			<Divider />
			<Divider />
			<ItemShowcase data={data} />
			<Divider />
			<Divider />
			<ButtonMore />
			<Divider />
			<Divider />
		</div>
	);
};

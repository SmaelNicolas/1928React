import React from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import "./itemShowcase.css";

export const ItemShowcase = ({ data }) => {
	return (
		<div className='itemShowcaseContainer'>
			{data.map((item) => (
				<ItemCard item={item} key={item.id} />
			))}
		</div>
	);
};

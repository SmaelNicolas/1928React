import React, { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import getProducts from "../../Firebase/getDataProducts";
import { Loader } from "../Loader/Loader";
import "./itemShowcase.css";

export const ItemShowcase = ({ value }) => {
	const [loader, setLoader] = useState(true);
	const [products, setProducts] = useState();

	useEffect(() => {
		getProducts(setProducts, setLoader);
	}, []);

	return loader ? (
		<Loader />
	) : (
		<div className='itemShowcaseContainer'>
			{products.map((item) => {
				if (value === "") {
					return <ItemCard item={item} key={item} />;
				} else {
					if (value === "destacado") {
						return item.outstanding === true ? (
							<ItemCard item={item} key={item} />
						) : undefined;
					} else {
						return item.type === value ? (
							<ItemCard item={item} key={item} />
						) : undefined;
					}
				}
			})}
		</div>
	);
};

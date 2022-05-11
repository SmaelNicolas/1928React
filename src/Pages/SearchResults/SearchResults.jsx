import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemCard } from "../../Components/ItemCard/ItemCard";
import { Loader } from "../../Components/Loader/Loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./searchResults.css";
import getProductsSearched from "../../Firebase/getDataSearched";

export const SearchResults = () => {
	const { query } = useParams();

	const [products, setProducts] = useState([]);
	const [loader, setLoader] = useState(true);
	const [exist, setExist] = useState(true);

	useEffect(() => {
		getProductsSearched(setProducts, setLoader, query, setExist);
	}, [query]);

	return (
		<div className='todosContainer'>
			{loader ? (
				<>
					<Divider />
					<Divider />
					<Loader />
				</>
			) : (
				<>
					<Divider />
					<Divider />
					<ButtonMore
						title='INICIO'
						path='/'
						icon={<ArrowBackIcon />}
					/>
					<Divider />
					<Divider />
					{exist ? (
						<div className='itemShowcaseContainer'>
							{products.map((item) =>
								item !== undefined ? (
									<ItemCard item={item} key={item.id} />
								) : undefined
							)}
						</div>
					) : (
						<div>VACIO</div>
					)}
					<Divider />
					<Divider />
				</>
			)}
		</div>
	);
};

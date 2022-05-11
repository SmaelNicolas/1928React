import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonMore } from "../../Components/ButtonMore/ButtonMore";
import { Divider } from "../../Components/Divider/Divider";
import { ItemCard } from "../../Components/ItemCard/ItemCard";
import { Loader } from "../../Components/Loader/Loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./searchResults.css";
import getProductsSearched from "../../Firebase/getDataSearched";
import truckGif from "../../Assets/truck.gif";
import { Helmet } from "react-helmet-async";

export const SearchResults = () => {
	const { query } = useParams();

	const [products, setProducts] = useState([]);
	const [loader, setLoader] = useState(true);
	const [exist, setExist] = useState(true);

	useEffect(() => {
		getProductsSearched(setProducts, setLoader, query, setExist);
	}, [query]);

	return (
		<>
			<Helmet>
				<title>1928 Showroom - Search</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='' />
			</Helmet>
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
								{products.map((item) => (
									<ItemCard item={item} key={item.id} />
								))}
							</div>
						) : (
							<div className='notFound'>
								<img
									className='notFoundImg'
									src={truckGif}
									alt='gif truck'
									title='gif'
									loading='lazy'
								/>
								<Divider />
								<Divider />
								<p className='notFoundMsg'>PROXIMAMENTE!</p>
							</div>
						)}
						<Divider />
						<Divider />
					</>
				)}
			</div>
		</>
	);
};

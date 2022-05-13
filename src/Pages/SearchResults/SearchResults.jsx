import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "../../Components/Divider/Divider";
import { ItemCard } from "../../Components/ItemCard/ItemCard";
import { Loader } from "../../Components/Loader/Loader";
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
				<title>1928 Showroom - Busqueda {query}</title>
				<meta
					name='description'
					content='Celebramos la belleza en todas sus formas. Todas las semanas nuevos ingresos.'
				/>
				<link rel='canonical' href='' />
			</Helmet>
			<div className='sectionContainer'>
				<Divider />
				<h1 className='hiddenH1'>
					1928 Showroom ropa mujer jeans remeras sweaters camperas
					accesorios
				</h1>
				<h2 className='title'>BUSQUEDA</h2>
				<Divider />
				<Divider />

				{loader ? (
					<>
						<Loader />
					</>
				) : (
					<>
						{/* <ButtonMore
							title='INICIO'
							path='/'
							icon={<ArrowBackIcon />}
						/> */}
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
									title='Ya esta llegando'
									loading='lazy'
								/>
								<Divider />
								<Divider />
								<p className='notFoundMsg'>PROXIMAMENTE...</p>
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

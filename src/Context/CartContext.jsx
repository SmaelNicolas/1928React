import React, { createContext, useState } from "react";

import "./cartContext.css";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	const [addedToCart, setAddedToCart] = useState(false);

	const handleAdd = () => {
		setAddedToCart(true);
		setTimeout(() => {
			setAddedToCart(false);
		}, 1000);
	};

	const totalPrice = () => {
		return cart
			.reduce((totalP, prod) => totalP + prod.price * prod.quantity, 0)
			.toFixed(2);
	};

	const quantityItems = () => {
		return cart.reduce((totalQ, prod) => totalQ + prod.quantity, 0);
	};

	const emptyCart = () => {
		setCart([]);
		handleAdd();
	};

	const getItemFromCart = (prod) => {
		return prod.type !== "jean"
			? cart.find(
					(item) =>
						item.id === prod.id &&
						item.colorSelected === prod.colorSelected
			  )
			: cart.find(
					(item) =>
						item.id === prod.id &&
						item.sizeSelected === prod.sizeSelected
			  );
	};

	const getAllItemsFromCart = () => {
		return cart;
	};

	function addItemToCart(item) {
		const itemInCart = getItemFromCart(item);
		if (itemInCart) {
			itemInCart.quantity++;
			setCart([...cart]);
		} else {
			setCart([...cart, item]);
		}
		handleAdd();
	}

	const deleteItemInCart = (item) => {
		const itemInCart = getItemFromCart(item);
		if (itemInCart.quantity > 1) {
			itemInCart.quantity--;
			setCart([...cart]);
		} else {
			item.type !== "jean"
				? setCart(
						cart.filter((it) =>
							it.id !== item.id
								? it
								: item.colorSelected !== it.colorSelected
								? it
								: undefined
						)
				  )
				: setCart(
						cart.filter((it) =>
							it.id !== item.id
								? it
								: item.sizeSelected !== it.sizeSelected
								? it
								: undefined
						)
				  );
		}
		handleAdd();
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addedToCart,
				setCart,
				totalPrice,
				quantityItems,
				emptyCart,
				getAllItemsFromCart,
				addItemToCart,
				deleteItemInCart,
				getItemFromCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

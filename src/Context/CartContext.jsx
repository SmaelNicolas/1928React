import React, { createContext, useState } from "react";
import { Toast } from "../Helpers/toast";
import Swal from "sweetalert2";

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
	};

	const getItemFromCart = (id) => {
		return cart.find((item) => item.id === id);
	};

	const getAllItemsFromCart = () => {
		return cart;
	};

	function addItemToCart(item) {
		const itemInCart = getItemFromCart(item.id);
		if (itemInCart) {
			itemInCart.quantity++;
			setCart([...cart]);
		} else {
			setCart([...cart, item]);
		}
		Toast.fire({
			icon: "success",
			title: `${item.title} agregado!`,
		});
		handleAdd();
	}

	const deleteItemInCart = (item) => {
		const itemInCart = getItemFromCart(item.id);
		if (itemInCart.quantity > 1) {
			itemInCart.quantity--;
			setCart([...cart]);
		} else {
			setCart(cart.filter((it) => it.id !== item.id));
		}
		Swal.fire({
			position: "top-start",
			icon: "success",
			title: `${item.title} Eliminado!`,
			showConfirmButton: false,
			timer: 800,
		});
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

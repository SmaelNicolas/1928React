import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";

import { Divider } from "../Divider/Divider";

import "./navBar.css";

export const NavBar = () => {
	const [value, setValue] = useState(0);
	const [showMenu, setShowMenu] = useState(false);

	const navigate = useNavigate();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	const clickSection = (value) => {
		navigate(value);
		handleClickMenu();
		window.scrollTo(0, 0);
	};

	return (
		<>
			<MenuIcon
				onClick={() => handleClickMenu()}
				className='menuIcon'
				fontSize='large'
			/>
			<Box
				sx={{ borderBottom: 1, borderColor: "divider" }}
				className='tabsBar'
			>
				<Tabs
					centered={true}
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
					className='tabsContainer'
				>
					<Tab label='Inicio' onClick={() => clickSection("")} />
					<Tab label='Jeans' onClick={() => clickSection("jeans")} />
					<Tab
						label='Remeras'
						onClick={() => clickSection("remeras")}
					/>
					<Tab
						label='Sweaters'
						onClick={() => clickSection("sweaters")}
					/>
					<Tab
						label='Accesorios'
						onClick={() => clickSection("accesorios")}
					/>
					<Tab
						label='Contacto'
						onClick={() => clickSection("contacto")}
					/>
				</Tabs>

				{showMenu && (
					<Tabs
						centered={true}
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						className='tabsListComponent'
					>
						<Tab label='Inicio' onClick={() => clickSection("")} />
						<Tab
							label='Jeans'
							onClick={() => clickSection("jeans")}
						/>
						<Tab
							label='Remeras'
							onClick={() => clickSection("remeras")}
						/>
						<Tab
							label='Sweaters'
							onClick={() => clickSection("sweaters")}
						/>
						<Tab
							label='Accesorios'
							onClick={() => clickSection("accesorios")}
						/>
						<Tab
							label='Contacto'
							onClick={() => clickSection("contacto")}
						/>
					</Tabs>
				)}
			</Box>
			<Divider />
		</>
	);
};

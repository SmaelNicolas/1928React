import React, { useState } from "react";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Home } from "../../Pages/Home/Home";
import { Jeans } from "../../Pages/Jeans/Jeans";
import { Remeras } from "../../Pages/Remeras/Remeras";
import { Sweaters } from "../../Pages/Sweaters/Sweaters";
import { Accesorios } from "../../Pages/Accesorios/Accesorios";
import { Contact } from "../../Pages/Contact/Contact";
import MenuIcon from "@mui/icons-material/Menu";

import "./navBar.css";

export const NavBar = () => {
	const [value, setValue] = useState(0);
	const [showMenu, setShowMenu] = useState(false);

	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<div>{children}</div>
					</Box>
				)}
			</div>
		);
	}
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	const clickSection = () => {
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
					<Tab label='Inicio' />
					<Tab label='Jeans' />
					<Tab label='Remeras' />
					<Tab label='Sweaters' />
					<Tab label='Accesorios' />
					<Tab label='Contacto' />
				</Tabs>
				{showMenu && (
					<Tabs
						centered={true}
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						className='tabsListComponent'
					>
						<Tab label='Inicio' onClick={() => clickSection()} />
						<Tab label='Jeans' onClick={() => clickSection()} />
						<Tab label='Remeras' onClick={() => clickSection()} />
						<Tab label='Sweaters' onClick={() => clickSection()} />
						<Tab
							label='Accesorios'
							onClick={() => clickSection()}
						/>
						<Tab label='Contacto' onClick={() => clickSection()} />
					</Tabs>
				)}
			</Box>
			<TabPanel value={value} index={0}>
				<Home value={"destacado"} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Jeans value={"jean"} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Remeras value={"remera"} />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Sweaters value={"sweater"} />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Accesorios value={"accesorio"} />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Contact />
			</TabPanel>
		</>
	);
};

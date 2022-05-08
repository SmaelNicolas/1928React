import React, { useState } from "react";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { Home } from "../../Pages/Home/Home";
import { Jeans } from "../../Pages/Jeans/Jeans";
import { Remeras } from "../../Pages/Remeras/Remeras";
import { Sweaters } from "../../Pages/Sweaters/Sweaters";
import { Accesorios } from "../../Pages/Accesorios/Accesorios";
import { Contact } from "../../Pages/Contact/Contact";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";

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
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const StyledFab = styled(Fab)({
		position: "absolute",
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: "0 auto",
	});

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<AppBar className='appBarResponsive'>
				<Toolbar>
					<StyledFab
						aria-label='menu'
						onClick={() => handleClickMenu()}
					>
						<MenuIcon />
					</StyledFab>
				</Toolbar>
			</AppBar>
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
						<Tab label='Inicio' onClick={() => handleClickMenu()} />
						<Tab label='Jeans' onClick={() => handleClickMenu()} />
						<Tab
							label='Remeras'
							onClick={() => handleClickMenu()}
						/>
						<Tab
							label='Sweaters'
							onClick={() => handleClickMenu()}
						/>
						<Tab
							label='Accesorios'
							onClick={() => handleClickMenu()}
						/>
						<Tab
							label='Contacto'
							onClick={() => handleClickMenu()}
						/>
					</Tabs>
				)}
			</Box>
			<TabPanel value={value} index={0}>
				<Home />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Jeans />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Remeras />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Sweaters />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Accesorios />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Contact />
			</TabPanel>
		</>
	);
};

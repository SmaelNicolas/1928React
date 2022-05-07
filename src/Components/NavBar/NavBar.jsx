import React, { useState } from "react";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import "./navBar.css";
import { Home } from "../../Pages/Home/Home";
import { Jeans } from "../../Pages/Jeans/Jeans";
import { Remeras } from "../../Pages/Remeras/Remeras";
import { Sweaters } from "../../Pages/Sweaters/Sweaters";
import { Accesorios } from "../../Pages/Accesorios/Accesorios";
import { Contact } from "../../Pages/Contact/Contact";

export const NavBar = () => {
	const [value, setValue] = useState(0);

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

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					centered={true}
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab label='Inicio' />
					<Tab label='Jeans' />
					<Tab label='Remeras' />
					<Tab label='Sweaters' />
					<Tab label='Accesorios' />
					<Tab label='Contacto' />
				</Tabs>
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

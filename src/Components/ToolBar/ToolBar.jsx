import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Search } from "./Search/Search";
import { Cart } from "./Cart/Cart";
import { Logo } from "./Logo/Logo";

import "./toolBar.css";

export const ToolBar = () => {
	return (
		<Box sx={{ flexGrow: 2 }} className='toolbarContainer'>
			<AppBar position='static' sx={{ bgcolor: "#e3f2fd" }}>
				<Toolbar>
					<Search />
					<Box sx={{ flexGrow: 1 }} />
					<Logo />
					<Box sx={{ flexGrow: 1 }} />
					<Cart />
					<Box sx={{ display: { md: "flex" } }}></Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

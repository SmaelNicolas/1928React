import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToolBar } from "./Components/ToolBar/ToolBar";
import { TopBar } from "./Components/TopBar/TopBar";
import { CartProvider } from "./Context/CartContext";
import { Routes, Route, Redirect } from "react-router-dom";
import "./App.css";
import { Orders } from "./Pages/Orders/Orders";
import { Divider } from "./Components/Divider/Divider";
import { Todos } from "./Pages/Todos/Todos";
import { SearchResults } from "./Pages/SearchResults/SearchResults";

function App() {
	return (
		<CartProvider>
			<div className='app'>
				<TopBar />
				<ToolBar />
				<Routes>
					<Route exact path='/' element={<NavBar />} />
					<Route path='order' element={<Orders />} />
					<Route path='productos' element={<Todos />} />
					<Route path='search/:query' element={<SearchResults />} />
					<Route path='search/' element={<NavBar />} />
					<Route path='*' element={<NavBar />} />
				</Routes>
				<Divider />
				<Divider />
				<Footer />
			</div>
		</CartProvider>
	);
}

export default App;

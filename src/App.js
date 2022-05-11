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
import { Home } from "./Pages/Home/Home";
import { Remeras } from "./Pages/Remeras/Remeras";
import { Jeans } from "./Pages/Jeans/Jeans";
import { Sweaters } from "./Pages/Sweaters/Sweaters";
import { Accesorios } from "./Pages/Accesorios/Accesorios";
import { Contact } from "./Pages/Contact/Contact";

function App() {
	return (
		<CartProvider>
			<div className='app'>
				<TopBar />
				<ToolBar />
				<NavBar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='order' element={<Orders />} />
					<Route path='productos' element={<Todos />} />
					<Route path='remeras' element={<Remeras />} />
					<Route path='jeans' element={<Jeans />} />
					<Route path='sweaters' element={<Sweaters />} />
					<Route path='accesorios' element={<Accesorios />} />
					<Route path='productos' element={<Todos />} />
					<Route path='contacto' element={<Contact />} />
					<Route path='search/:query' element={<SearchResults />} />
					<Route path='search/' element={<Home />} />
					<Route path='*' element={<Home />} />
				</Routes>
				<Divider />
				<Divider />
				<Footer />
			</div>
		</CartProvider>
	);
}

export default App;

import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToolBar } from "./Components/ToolBar/ToolBar";
import { TopBar } from "./Components/TopBar/TopBar";
import { CartProvider } from "./Context/CartContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<CartProvider>
			<div className='app'>
				<TopBar />
				<ToolBar />
				<Routes>
					<Route exact path='/' element={<NavBar />} />
					{/* <Route path='order' element={<About />} /> */}
				</Routes>
				<Footer />
			</div>
		</CartProvider>
	);
}

export default App;

import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToolBar } from "./Components/ToolBar/ToolBar";
import { TopBar } from "./Components/TopBar/TopBar";
import { CartProvider } from "./Context/CartContext";

function App() {
	return (
		<CartProvider>
			<div className='app'>
				<TopBar />
				<ToolBar />
				<NavBar />
				<Footer />
			</div>
		</CartProvider>
	);
}

export default App;

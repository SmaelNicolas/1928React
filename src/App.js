import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToolBar } from "./Components/ToolBar/ToolBar";
import { TopBar } from "./Components/TopBar/TopBar";

function App() {
	return (
		<div className='app'>
			<TopBar />
			<ToolBar />
			<NavBar />
			<Footer />
		</div>
	);
}

export default App;

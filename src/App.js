import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToolBar } from "./Components/ToolBar/ToolBar";
import { TopBar } from "./Components/TopBar/TopBar";

function App() {
	return (
		<div className='app'>
			<TopBar />
			<ToolBar />
			<NavBar />
		</div>
	);
}

export default App;

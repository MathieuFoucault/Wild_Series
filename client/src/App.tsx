import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<header>
				<h1 className="logo">Wild Series</h1>
			</header>

			<nav className="navbar">
				<Link to="/">Home</Link>
				<Link to="/programs">Programs</Link>
			</nav>

			<main className="text-box">
				<Outlet />
			</main>
		</>
	);
}

export default App;

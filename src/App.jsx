import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Beer from "./Pages/Beer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>



            <Navbar/>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='contacto' element={<Contacto />} />
				<Route path='/beer/:id' element={<Beer/>} />
			</Routes>
		</>
	)
}

export default App

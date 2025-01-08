import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<Navigate replace to="home" />} />
						<Route path="home" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="properties" element={<Property />} />
						<Route path="services" element={<Service />} />
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;

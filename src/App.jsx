import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import ShortLet from "./pages/ShortLet";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import PropertyDetail from "./features/property/PropertyDetail";
import InspectProperty from "./features/property/InspectProperty";
import ShortLetDetails from "./features/shortLet/ShortLetDetails";

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
						<Route path="properties/:propertyId" element={<PropertyDetail />} />
						<Route
							path="properties/inspect-form/:Id"
							element={<InspectProperty />}
						/>
						<Route path="shortlet" element={<ShortLet />} />
						<Route path="shortlet/:shortletId" element={<ShortLetDetails />} />
						<Route path="contact" element={<Contact />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;

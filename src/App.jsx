import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/404/404Page";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProjectsPage from "./pages/Projects/ProjectsPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="contactPage" element={<ContactPage />} />
					<Route path="projectsPage" element={<ProjectsPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

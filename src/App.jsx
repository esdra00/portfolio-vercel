import {RouterProvider, createBrowserRouter} from "react-router-dom";
import ErrorPage from "./pages/404/404Page";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProjectsPage from "./pages/Projects/ProjectsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{path: "/", element: <HomePage />},
			{path: "projectsPage", element: <ProjectsPage />},
			{path: "contactPage", element: <ContactPage />},
			{path: "*", element: <ErrorPage />},
		],
	},
]);

// export default function App() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={<Layout />}>
// 					<Route index element={<HomePage />} />
// 					<Route path="contactPage" element={<ContactPage />} />
// 					<Route path="projectsPage" element={<ProjectsPage />} />
// 					<Route path="*" element={<ErrorPage />} />
// 				</Route>
// 			</Routes>
// 		</BrowserRouter>
// 	);
// }

export default function App() {
	return <RouterProvider router={router}/>;
}

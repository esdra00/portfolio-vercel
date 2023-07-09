import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Menu from "../components/Menu/Menu";
import SocialMenu from "../components/Socials/Socials";

export default function Layout() {
	const location = useLocation();
	// Set loading state to true initially
	const [loading, setLoading] = useState(true);

	// WITH PROMISE
	// useEffect(() => {
	// 	// Loading function to load data or
	// 	// fake it using setTimeout;
	// 	const loadData = async () => {
	// 		// Wait for two second
	// 		await new Promise((r) => setTimeout(r, 100));
	// 		console.log("done promise");
	// 		// Toggle loading state
	// 		setLoading((loading) => !loading);
	// 	};

	// 	loadData();
	// }, []);

	// WITHOUT PROMISE
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	// If page is in loading state, display
	// loading message. Modify it as per your
	// requirement.
	if (loading) {
		return <div>Loading....</div>;
	} else {
		return (
			<>
				<Menu />
				<SocialMenu />
				<AnimatePresence mode="wait" initial={false}>
					<Outlet location={location} key={location.pathname} />
				</AnimatePresence>
			</>
		);
	}
}

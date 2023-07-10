import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Socials from "../components/Layout/Socials/Socials";

export default function Layout() {
	const location = useLocation();
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

	if (loading) {
		return <div>Loading....</div>;
	} else {
		return (
			<>
				<Header />
				<Socials />
				<AnimatePresence mode="wait" initial={false}>
					<Outlet location={location} key={location.pathname} />
				</AnimatePresence>
			</>
		);
	}
}

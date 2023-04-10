import {AnimatePresence} from "framer-motion";
import {Outlet, useLocation} from "react-router-dom";
import Menu from "../components/Menu/Menu";
import SocialMenu from "../components/Socials/Socials";

export default function Layout() {
	const location = useLocation();

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

import {Link} from "react-router-dom";

export default function Nav({classMobile, classname}) {
	return (
		<nav>
			<ul className={classname}>
				<li>
					<Link to="/portfolioPROD/" className={classMobile}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/portfolioPROD/#about" className={classMobile}>
						About
					</Link>
				</li>
				<li>
					<Link to="/portfolioPROD/projectsPage" className={classMobile}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="/portfolioPROD/contactPage" className={classMobile}>
						Contact
					</Link>
				</li>
				<li>
					<h3 className="cta">RESUME</h3>
				</li>
			</ul>
		</nav>
	);
}

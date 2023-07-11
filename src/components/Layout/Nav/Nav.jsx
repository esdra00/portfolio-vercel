import {Link} from "react-router-dom";

export default function Nav({link, list, cta, onClick}) {
	return (
		<nav>
			<ul className={list}>
				<li>
					<Link to="/" className={link} onClick={onClick}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/projectsPage" className={link} onClick={onClick}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="/contactPage" className={link} onClick={onClick}>
						Contact
					</Link>
				</li>
				<li>
					<h3 className={cta}>RESUME</h3>
				</li>
			</ul>
		</nav>
	);
}

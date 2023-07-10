import {Link} from "react-router-dom";

export default function Nav({mobile, classname, onClick}) {
	return (
		<nav>
			<ul className={classname}>
				<li>
					<Link to="/" className={mobile} onClick={onClick}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/projectsPage" className={mobile} onClick={onClick}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="/contactPage" className={mobile} onClick={onClick}>
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

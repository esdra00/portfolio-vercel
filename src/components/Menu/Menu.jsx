import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/social media icon/Group 3logo 1 - 50x50.svg";
import MenuMobile from "../Menu Mobile/Menu_Mobile";
import Nav from "../Nav/Nav";
import style from "./menuStyle.module.scss";

export default function Menu() {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		var body = document.body;
		body.classList.toggle("noScroll");

		setOpen(!isOpen);
	};

	// hide menu nav on scrolldown for tablets and laptops
	var prevScrollpos = window.pageYOffset;
	if (screen.width > 425) {
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navMenu").style.top = "1.75%";
			} else {
				document.getElementById("navMenu").style.top = "-100px";
			}
			prevScrollpos = currentScrollPos;
		};
	}

	return (
		<>
			<header className={style.menu} id="navMenu">
				<Link
					to="/portfolioPROD/"
					className={style.logo}
					aria-label="Website logo"
				>
					<img src={logo} alt="website logo" />
				</Link>
				<div className={style.line}></div>
				<Nav classname={style.navMenu} />
				<div>
					<div
						className={`${style.main_btn} ${
							isOpen ? style.active : ""
						}`}
						onClick={() => {
							toggleMenu();
						}}
					>
						<div
							className={`${style.custom_menu_toggle} ${style.openMenu}`}
						></div>
					</div>
				</div>
				<MenuMobile isOpen={isOpen} />
			</header>
		</>
	);
}

import {Link} from "react-router-dom";
import MenuMobile from "../Menu Mobile/Menu_Mobile";
import Nav from "../Nav/Nav";
import style from "./headerStyle.module.scss";
import logo from "/src/assets/social media icon/Group 3logo 1 - 50x50.svg";

export default function Header() {
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
		<header className={style.menu} id="navMenu">
			<Link to="/" className={style.logo} aria-label="Website logo">
				<img src={logo} alt="website logo" />
			</Link>
			<div className={style.line}></div>
			<Nav classname={style.navMenu} />
			<MenuMobile />
		</header>
	);
}

import {useState} from "react";
import Nav from "../Nav/Nav";
import SocialsLinksIcon from "../Socials/Social_Icon";
import style from "./menuMobileStyle.module.scss";

export default function MenuMobile() {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		// var body = document.body;
		// body.classList.toggle("noScroll");
		setOpen(!isOpen);
	};

	return (
		<>
			<div>
				<div
					className={`${style.main_btn} ${isOpen ? style.active : ""}`}
					onClick={() => {
						toggleMenu();
					}}
				>
					<div
						className={`${style.custom_menu_toggle} ${style.openMenu}`}
					></div>
				</div>
			</div>
			<div className={`${style.menu} ${isOpen ? style.open : ""}`}>
				<div className={style.navMobile}>
					<div className={style.title}>
						<h6>navigation</h6>
						<div className={style.line}></div>
					</div>
					<Nav link={style.linkMobile} onClick={toggleMenu} cta={style.cta}/>
				</div>
				<div className={style.navSocialMobile}>
					<div className={style.title}>
						<h6>follow me</h6>
						<div className={style.line}></div>
					</div>
					<div className={style.iconsWrapper}>
						<SocialsLinksIcon className={style.linkSocial} />
					</div>
				</div>
			</div>
		</>
	);
}

import {useState} from "react";
import Nav from "../Nav/Nav";
import IconSocial from "../Socials/Social_Icon";
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
			<div
				className={`${style.menu} ${isOpen ? style.open : ""}`}
				id="menuMobile"
			>
				<div className={style.navMobile}>
					<div className={style.title}>
						<h6>navigation</h6>
						<span className={style.line}></span>
					</div>
					<Nav mobile={style.linkMobile} onClick={toggleMenu} />
				</div>
				<div className={style.navSocialMobile}>
					<div className={style.title}>
						<h6>follow me</h6>
						<span className={style.line}></span>
					</div>
					<div className={style.iconsWrapper}>
						<IconSocial className={style.linkSocial} />
					</div>
				</div>
			</div>
		</>
	);
}

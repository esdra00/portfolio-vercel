import Nav from "../Nav/Nav";
import style from "./menuMobileStyle.module.scss";
import IconSocial from "../Socials/Social_Icon";

export default function MenuMobile({isOpen}) {
	return (
		<>
			<div
				className={`${style.menu} ${isOpen ? style.open : ""}`}
				id="menuMobile"
			>
				<div className={style.navMobile}>
					<div className={style.title}>
						<h6>navigation</h6>
						<span className={style.line}></span>
					</div>
					<Nav classMobile={style.linkMobile} />
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

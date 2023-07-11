import SocialsLinksIcon from "./Social_Icon";
import style from "./socialStyle.module.scss";

export default function Socials() {
	return (
		<div className={style.socialMenu}>
			<SocialsLinksIcon className={style.linkSocial} />
			<div className={style.line}></div>
		</div>
	);
}

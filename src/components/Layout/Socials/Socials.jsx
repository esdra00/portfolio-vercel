import IconSocial from "./Social_Icon";
import style from "./socialStyle.module.scss";

export default function Socials() {
	return (
		<div className={style.socialMenu}>
			<IconSocial className={style.linkSocial} />
			<div className={style.line}></div>
		</div>
	);
}

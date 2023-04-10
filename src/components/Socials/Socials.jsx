import style from "./socialStyle.module.scss";
import IconSocial from "./Social_Icon";

export default function SocialMenu() {
	return (
		<>
			<div className={style.socialMenu}>
				<IconSocial className={style.linkSocial} />
				<div className={style.line}></div>
			</div>
		</>
	);
}

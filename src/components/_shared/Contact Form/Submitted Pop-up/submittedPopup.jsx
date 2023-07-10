import style from "./submittedPopupStyle.module.scss";

export default function Submitted() {
	return (
		<div className={style.popUp}>
			<p className={style.text}>Submitted with success!</p>
		</div>
	);
}

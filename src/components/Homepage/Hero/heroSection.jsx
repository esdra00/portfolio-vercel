import style from "./heroSectionStyle.module.scss";

export default function HeroSection() {
	return (
		<div className={style.section}>
			<div className={style.container}>
				<div className={style.hero}>
					<h1>Esdra Bergamasco</h1>
					<h2>Front-end Web Developer</h2>
				</div>
				<a href="#about" className={style.cta}>
					<div className={style.chevron}></div>
					<div className={style.chevron}></div>
					<div className={style.chevron}></div>
					<span className={style.text}>Scroll down</span>
				</a>
			</div>
		</div>
	);
}

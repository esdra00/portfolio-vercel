import profilePicture from "../../../assets/pfp.png";
import style from "./aboutSectionStyle.module.scss";

export default function AboutSection() {
	return (
		<section className={style.section} id="about" tabIndex={0}>
			<div className={style.container}>
				<header>
					<h2 className={style.header}>About</h2>
				</header>
				<div className={style.img_w}>
					<img
						src={profilePicture}
						className={style.image}
						alt="Profile Picture"
						height={400}
						width={200}
					/>
				</div>
				<div className={style.txt_w}>
					<div className={style.line}></div>
					<p className={style.txt}>
						My name is <b>Esdra Bergamasco</b> and I am a Front End
						Developer with a passion for web design.<br></br> My
						interest in web development started in 2020 when I first
						started learning the basic of HTML & CSS. From that I went
						on to learn many more frameworks such as bootstrap, sass,
						styled components and choose react and next.js as my main
						focus.<br></br>After spending a lot of time working on a set
						of smaller projects with the aim of showing off my skills, I
						dedicated a considerable amount of time to this website, my
						portfolio, as a cupiditate.
					</p>
				</div>
			</div>
			<div className={style.cta}>resume</div>
		</section>
	);
}
// export default function AboutSection() {
// 	const ref = useRef(null);

// 	return (
// 		<section className={style.section} id="about" ref={ref} tabIndex={0}>
// 			<div className={style.container}>
// 				<m.header
// 					initial="title"
// 					whileInView="inView"
// 					variants={aboutSection}
// 					viewport={{once: true}}
// 				>
// 					<h2 className={style.header}>About</h2>
// 				</m.header>
// 				<m.div
// 					className={style.img_w}
// 					initial="image"
// 					whileInView="inView"
// 					variants={aboutSection}
// 					viewport={{once: true}}
// 				>
// 					<img
// 						src={profilePicture}
// 						className={style.image}
// 						alt="Profile Picture"
// 						height={400}
// 						width={200}
// 					/>
// 				</m.div>
// 				<div className={style.txt_w}>
// 					<div className={style.line}></div>
// 					<m.p
// 						className={style.txt}
// 						initial="txt"
// 						whileInView="inView"
// 						variants={aboutSection}
// 						viewport={{once: true}}
// 					>
// 						My name is <b>Esdra Bergamasco</b> and I am a Front End
// 						Developer with a passion for web design.<br></br> My
// 						interest in web development started in 2020 when I first
// 						started learning the basic of HTML & CSS. From that I went
// 						on to learn many more frameworks such as bootstrap, sass,
// 						styled components and choose react and next.js as my main
// 						focus.<br></br>After spending a lot of time working on a set
// 						of smaller projects with the aim of showing off my skills, I
// 						dedicated a considerable amount of time to this website, my
// 						portfolio, as a cupiditate.
// 					</m.p>
// 				</div>
// 			</div>
// 			<div className={style.cta}>resume</div>
// 		</section>
// 	);
// }

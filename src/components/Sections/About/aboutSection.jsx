import {motion} from "framer-motion";
import {useRef} from "react";
import profilePicture from "../../../assets/_shirt - no bg - cropped.png";
import style from "./aboutSectionStyle.module.scss";

export default function AboutSection() {
	const ref = useRef(null);

	const content = {
		title: {
			x: -100,
			opacity: 0,
		},
		image: {
			x: 100,
			opacity: 0,
			transition: {delay: 5},
		},
		txt: {
			x: -200,
			opacity: 0,
		},
		inView: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 2,
				bounce: 0.3,
			},
		},
	};

	return (
		<section className={style.section} id="about" ref={ref} tabIndex={0}>
			<div className={style.container}>
				<motion.header
					initial="title"
					whileInView="inView"
					variants={content}
				>
					<h2 className={style.header}>About</h2>
				</motion.header>
				<motion.div
					className={style.img_w}
					initial="image"
					whileInView="inView"
					variants={content}
				>
					<img
						src={profilePicture}
						className={style.image}
						alt="Profile Picture"
						height={400}
						width={200}
					/>
				</motion.div>
				<div className={style.txt_w}>
					<div className={style.line}></div>
					<motion.p
						className={style.txt}
						initial="txt"
						whileInView="inView"
						variants={content}
					>
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
					</motion.p>
				</div>
			</div>
			<div className={style.cta}>resume</div>
		</section>
	);
}
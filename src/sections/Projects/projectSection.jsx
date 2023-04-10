import {motion} from "framer-motion";
import ProjectCard from "../../components/Project Card/Project_Card";
import style from "./projectSectionStyle.module.scss";

export default function ProjectSection() {
	const title = {
		title: {
			scaleX: 1.2,
		},
		inView: {
			scaleX: 1,
			transition: {
				type: "spring",
				duration: 2,
			},
		},
	};

	const line = {
		right: {
			scaleX: 2,
		},
		left: {
			scaleX: 2,
		},
		inView: {
			scaleX: 1,
			transition: {
				type: "spring",
				duration: 2,
				bounce: 0.3,
			},
		},
	};

	return (
		<section className={style.section} id="projects">
			<header className={style.title}>
				<motion.span
					className={style.line}
					initial="left"
					whileInView="inView"
					variants={line}
					style={{originX: 1}}
				></motion.span>
				<motion.h2 initial="title" whileInView="inView" variants={title}>
					Project
				</motion.h2>
				<motion.span
					className={style.line}
					initial="right"
					whileInView="inView"
					variants={line}
					style={{originX: 0}}
				></motion.span>
			</header>
			<div className={style.container}>
				<ProjectCard />
			</div>
			<button className={style.cta}>more work</button>
		</section>
	);
}

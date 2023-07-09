import {m} from "framer-motion";
import style from "./projectSectionStyle.module.scss";
import ProjectSectionCard from "/src/components/Project Section Card/projectSectionCard";

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
				<m.span
					className={style.line}
					initial="left"
					whileInView="inView"
					variants={line}
					style={{originX: 1}}
				></m.span>
				<m.h2 initial="title" whileInView="inView" variants={title}>
					Projects
				</m.h2>
				<m.span
					className={style.line}
					initial="right"
					whileInView="inView"
					variants={line}
					style={{originX: 0}}
				></m.span>
			</header>
			<div className={style.container}>
				<ProjectSectionCard />
			</div>
			<button className={style.cta}>more work</button>
		</section>
	);
}

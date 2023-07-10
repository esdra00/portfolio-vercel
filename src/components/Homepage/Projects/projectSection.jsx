import style from "./projectSectionStyle.module.scss";
import ProjectSectionCard from "/src/components/Project Section Card/projectSectionCard";

export default function ProjectSection() {
	return (
		<section className={style.section} id="projects">
			<header className={style.title}>
				<span className={style.line}></span>
				<h2 initial="title">Projects</h2>
				<span className={style.line}></span>
			</header>
			<div className={style.container}>
				<ProjectSectionCard />
			</div>
			<button className={style.cta}>more work</button>
		</section>
	);
}

// export default function ProjectSection() {
// 	return (
// 		<section className={style.section} id="projects">
// 			<header className={style.title}>
// 				<m.span
// 					className={style.line}
// 					initial="left"
// 					whileInView="inView"
// 					variants={projectSectionLine}
// 					style={{originX: 1}}
// 					viewport={{once: true}}
// 				></m.span>
// 				<m.h2
// 					initial="title"
// 					whileInView="inView"
// 					variants={projectSectionTitle}
// 					viewport={{once: true}}
// 				>
// 					Projects
// 				</m.h2>
// 				<m.span
// 					className={style.line}
// 					initial="right"
// 					whileInView="inView"
// 					variants={projectSectionLine}
// 					style={{originX: 0}}
// 					viewport={{once: true}}
// 				></m.span>
// 			</header>
// 			<div className={style.container}>
// 				<ProjectSectionCard />
// 			</div>
// 			<button className={style.cta}>more work</button>
// 		</section>
// 	);
// }

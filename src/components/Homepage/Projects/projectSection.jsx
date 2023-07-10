import LinkCta from "../../_shared/Link Cta/linkCta";
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
				<LinkCta link={"https://github.com/esdra00"} text="More Work" />
			</div>
		</section>
	);
}
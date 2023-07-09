import {LazyMotion, domAnimation, m} from "framer-motion";
import projectsData from "../../assets/data.json";
import {projectSectionImage, projectSectionTxt} from "../Framer/animation";
import style from "./projectCard.module.scss";

export default function ProjectSectionCard() {
	return (
		<LazyMotion features={domAnimation}>
			{projectsData &&
				projectsData.map((project) => {
					return (
						<article
							className={`${style.container} ${
								project.id % 2 == 0 ? style.reverse : ""
							}`}
							key={project.id}
							tabIndex={0}
						>
							<m.div
								className={style.txt_w}
								initial="txt"
								whileInView="inView"
								variants={projectSectionTxt}
							>
								<h3>{project.title}</h3>
								<p>{project.Description}</p>
								<div className={style.line}></div>
								<ul className={style.framework_list}>
									{project.Frameworks.map((framework) => {
										return (
											<li
												className={style.framework}
												key={framework}
											>
												{framework}
											</li>
										);
									})}
								</ul>
							</m.div>
							<m.div
								className={style.image_w}
								initial="img"
								whileInView="inView"
								variants={projectSectionImage}
							>
								<img
									src={project.Preview}
									alt=""
									className={style.image}
									height={1056}
									width={1440}
								/>
							</m.div>
						</article>
					);
				})}
		</LazyMotion>
	);
}

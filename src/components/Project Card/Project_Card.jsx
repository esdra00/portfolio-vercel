import {motion} from "framer-motion";
import style from "./projectCard.module.scss";
import projectsData from "../../assets/data.json";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// add key: id to second iteration
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default function ProjectCard() {
	const image = {
		img: {x: 50},
		inView: {
			x: 0,
			transition: {
				type: "spring",
				duration: 2,
				bounce: 0.3,
			},
		},
	};
	const text = {
		txt: {x: -50, opacity: 0},
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
		<>
			{projectsData &&
				projectsData.map((project) => {
					return (
						<div
							className={`${style.container} ${
								project.id % 2 == 0 ? style.reverse : ""
							}`}
							key={project.id}
						>
							<motion.div
								className={style.txt_w}
								initial="txt"
								whileInView="inView"
								variants={text}
							>
								<h3>{project.title}</h3>
								<p>{project.Description}</p>
								<div className={style.line}></div>
								<ul className={style.framework_list}>
									{project.Frameworks.map((framework) => {
										return (
											<li className={style.framework}>
												{framework}
											</li>
										);
									})}
								</ul>
							</motion.div>
							<motion.div
								className={style.image_w}
								initial="img"
								whileInView="inView"
								variants={image}
							>
								<img
									src={project.Preview}
									alt=""
									className={style.image}
									height={1056}
									width={1440}
								/>
							</motion.div>
						</div>
					);
				})}
		</>
	);
}

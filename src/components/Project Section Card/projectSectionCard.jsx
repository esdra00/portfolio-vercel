import {motion} from "framer-motion";
import projectsData from "../../assets/data.json";
import style from "./projectCard.module.scss";

export default function ProjectSectionCard() {
	const image =
		window.innerWidth > 768
			? {
					img: {x: 50},
					inView: {
						x: 0,
						transition: {
							type: "spring",
							duration: 2,
							bounce: 0.3,
						},
					},
			  }
			: {
					img: {y: 100, scaleX: 0.8},
					inView: {
						y: 0,
						scaleX: 1,
						transition: {
							type: "spring",
							duration: 1.5,
						},
					},
			  };

	const text =
		window.innerWidth > 768
			? {
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
			  }
			: {
					txt: {y: 100, scaleX: 0.8},
					inView: {
						y: 0,
						scaleX: 1,
						transition: {
							type: "spring",
							duration: 1.5,
						},
					},
			  };

	return (
		<>
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
											<li
												className={style.framework}
												key={framework}
											>
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
						</article>
					);
				})}
		</>
	);
}

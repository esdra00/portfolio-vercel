import {motion, useIsPresent} from "framer-motion";
import {useState} from "react";
import projectsData from "../../assets/data.json";
import style from "./projectsPageStyle.module.scss";

export default function ProjectsPage() {
	const isPresent = useIsPresent();
	const [isActive, setActive] = useState([]);
	const [filters, setFilter] = useState([
		"React",
		"Javascript",
		"Next",
		"Styled Components",
		"Bootstrap",
	]);

	// when clicking a filter removes it from filters state array
	// and adds it to isActive state array
	const setActiveFilter = (e) => {
		if (!isActive.includes(e.target.value)) {
			setActive([...isActive, e.target.value]);
		}

		setFilter(
			filters.filter(function (i) {
				return i !== e.target.value;
			})
		);
	};

	// when clicking an active filters removes it from isActive state array
	// and adds it to filters state array
	const removeActiveFilter = (e) => {
		if (!filters.includes(e.target.value)) {
			setFilter([...filters, e.target.value]);
		}

		setActive(
			isActive.filter(function (i) {
				return i !== e.target.value;
			})
		);
	};

	const FilterButton = ({array, onclick, classname}) => {
		return (
			<ul>
				{array &&
					array.map((filter) => {
						return (
							<li>
								<button
									value={filter}
									key={filter}
									className={classname}
									onClick={onclick}
								>
									{filter}
								</button>
							</li>
						);
					})}
			</ul>
		);
	};

	const Card = () => {
		return (
			<>
				{projectsData &&
					projectsData.map((project) => {
						if (isActive.every((f) => project.Frameworks.includes(f))) {
							return (
								<div className={style.container} key={project.id}>
									<div className={style.txt_w}>
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
									</div>
									<div className={style.image_w}>
										<img
											src={project.Preview}
											alt=""
											className={style.image}
											height={1056}
											width={1440}
										/>
									</div>
								</div>
							);
						}
						// else if (isActive.length == 0) {
						// 	<Card project={project} />;
						// }
					})}
			</>
		);
	};

	return (
		<>
			<div className={style.section}>
				<div className={style.title_w}>
					<h3>Projects</h3>
					<h2>A selection of my works!</h2>
				</div>
				<div className={style.content}>
					<div className={style.filterBar}>
						<button className={style.cta}>filter</button>
						<FilterButton
							array={isActive}
							onclick={removeActiveFilter}
							classname={style.activeFilter}
						/>
						<div className={style.line}></div>
						<FilterButton
							array={filters}
							onclick={setActiveFilter}
							classname={style.filter}
						/>
					</div>
					<div className={style.projects_w}>
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<motion.div
					initial={{scaleX: 1}}
					animate={{
						scaleX: 0,
						transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
					}}
					exit={{
						scaleX: 1,
						transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
					}}
					style={{originX: isPresent ? 0 : 1}}
					className="privacy-screen"
				></motion.div>
			</div>
		</>
	);
}

// const Card = ({ project }) => {
// 	return (
// 		<>
// 			<div className="projectContainer" key={project.id}>
// 				<div className="textContainer">
// 					<h3>{project.title}</h3>
// 					<p>{project.Description}</p>
// 					<div className="lineTitle"></div>
// 					<ul className="projectTech">
// 						{project.Frameworks.map((framework) => {
// 							return (
// 								<li className="projectFramework">
// 									{framework}
// 								</li>
// 							);
// 						})}
// 					</ul>
// 				</div>
// 				<div className="projectImageWrapper">
// 					<img
// 						src={project.Preview}
// 						alt=""
// 						className="projectImage"
// 						height={1056}
// 						width={1440}
// 					/>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// const ActiveFilter = () => {
// 	return (
// 		<>
// 			{isActive &&
// 				isActive.map((activeFilter) => {
// 					return (
// 						<li>
// 							<button
// 								className="activeFilter"
// 								value={activeFilter}
// 								key={activeFilter}
// 								onClick={removeActiveFilter}
// 							>
// 								{activeFilter}
// 							</button>
// 						</li>
// 					);
// 				})}
// 		</>
// 	);
// };

// const Filter = () => {
// 	return (
// 		<>
// 			{filters &&
// 				filters.map((filter) => {
// 					return (
// 						<li>
// 							<button
// 								className="filterButton"
// 								value={filter}
// 								key={filter}
// 								onClick={setActiveFilter}
// 							>
// 								{filter}
// 							</button>
// 						</li>
// 					);
// 				})}
// 		</>
// 	);
// };

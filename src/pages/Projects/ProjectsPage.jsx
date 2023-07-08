import {motion, useIsPresent} from "framer-motion";
import {useState} from "react";
import FilterButton from "../../components/Filter Button/filterButton";
import ProjectPageCard from "../../components/Project Page Card/projectPageCard.jsx";
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
						<ProjectPageCard isActive={isActive} />
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

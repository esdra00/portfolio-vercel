import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "./projectDetailStyle.module.scss";
import projectData from "/src/assets/data.json";
export default function ProjectDetail() {
	const {id} = useParams();
	const [detail, setDetail] = useState();

	useEffect(() => {
		projectData.map((project) => {
			if (project.id == 1) {
				setDetail(project);
			}
		});
	}, []);
	// console.log(detail?.Preview)
	// 	console.log(detail)
	return (
		<div className={style.container}>
			<h2 className={style.title}>{detail?.title}</h2>
			{detail ? (
				<img src={"/public/multi step form - 1.jpg"} className={style.img} />
			) : null}
			<p className={style.desc}>{detail?.Description}</p>
		</div>
	);
}

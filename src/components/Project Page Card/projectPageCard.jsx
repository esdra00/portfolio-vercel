import {Link} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import style from "./projectPageCardStyle.module.scss";

export default function ProjectPageCard({isActive}) {
	const {data} = useFetch();

	return (
		<>
			{data?.map((project) => {
				if (isActive.every((f) => project.frameworks.includes(f))) {
					return (
						<div className={style.container} key={project.id}>
							<div className={style.txt_w}>
								<h3>
									<Link
										to={`/detail/${project.id}`}
										className={style.title}
									>
										{project.title}
									</Link>
								</h3>
								<div className={style.line}></div>
								<ul className={style.framework_list}>
									{project.frameworks?.map((framework) => {
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
									src={project.preview}
									alt=""
									className={style.image}
									height={1056}
									width={1440}
								/>
							</div>
						</div>
					);
				}
			})}
		</>
	);

	// return (
	// 	<>
	// 		{projectsData &&
	// 			projectsData.map((project) => {
	// 				if (isActive.every((f) => project.Frameworks.includes(f))) {
	// 					return (
	// 						<div className={style.container} key={project.id}>
	// 							<div className={style.txt_w}>
	// 								<h3>
	// 									<Link
	// 										to={`/detail/${project.id}`}
	// 										className={style.title}
	// 									>
	// 										{project.title}
	// 									</Link>
	// 								</h3>
	// 								<div className={style.line}></div>
	// 								<ul className={style.framework_list}>
	// 									{project.Frameworks.map((framework) => {
	// 										return (
	// 											<li
	// 												className={
	// 													style.framework
	// 												}
	// 											>
	// 												{framework}
	// 											</li>
	// 										);
	// 									})}
	// 								</ul>
	// 							</div>
	// 							<div className={style.image_w}>
	// 								<img
	// 									src={project.Preview}
	// 									alt=""
	// 									className={style.image}
	// 									height={1056}
	// 									width={1440}
	// 								/>
	// 							</div>
	// 						</div>
	// 					);
	// 				}
	// 				// else if (isActive.length == 0) {
	// 				// 	<Card project={project} />;
	// 				// }
	// 			})}
	// 	</>
	// );
}

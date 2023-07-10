import {Link} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import SvgIcon from "../_shared/svgIcon";
import style from "./projectPageCardStyle.module.scss";
import LinkCta from "../_shared/Link Cta/linkCta";

export default function ProjectPageCard({isActive}) {
	const {data} = useFetch();

	return (
		<div className={style.projects_w}>
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
										<SvgIcon />
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
									alt="project preview"
									className={style.image}
									height={1056}
									width={1440}
								/>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}

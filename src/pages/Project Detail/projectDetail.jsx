import {useParams} from "react-router-dom";
import {useFetchID} from "../../hooks/useFetchId";
import LinkCta from "../../components/shared/Link Cta/linkCta";
import style from "./projectDetailStyle.module.scss";

export default function ProjectDetail() {
	const {id} = useParams();
	const {data} = useFetchID(id);

	return (
		<div className={style.container}>
			<h2 className={style.title}>{data?.title}</h2>
			<img
				src={`/${data?.preview}`}
				className={style.img}
				alt="project preview"
			/>
			<p className={style.desc}>{data?.description}</p>
			<div className={style.cta_w}>
				<LinkCta link={data?.github} text="Github Code" />
				<LinkCta link={data?.site} text="Live Site" />
			</div>
		</div>
	);
}

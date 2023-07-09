import {useParams} from "react-router-dom";
import {useFetchID} from "../../hooks/useFetchId";
import style from "./projectDetailStyle.module.scss";

export default function ProjectDetail() {
	const {id} = useParams();
	const {data} = useFetchID(id);

	return (
		<div className={style.container}>
			<h2 className={style.title}>{data?.title}</h2>
			<img src={`/public/${data?.preview}`} className={style.img} />
			<p className={style.desc}>{data?.description}</p>
			<div className={style.buttons_w}>
				<div className={style.button1}>Button</div>
				<div className={style.button2}>Button</div>
				<div className={style.button3}>Button</div>
			</div>
		</div>
	);
}

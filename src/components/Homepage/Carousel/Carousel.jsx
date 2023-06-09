import {m, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import data from "/src/assets/data.json";
import style from "./carouselStyle.module.scss";

const CarouselImg = () => {
	return (
		<>
			{data.map((e) => {
				return (
					<div className={style.carousel_img}>
						<img src={e.Preview} alt="" />
					</div>
				);
			})}
		</>
	);
};

export default function Carousel() {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll();

	return (
		<div className={style.carousel} ref={ref}>
			<div className={style.container_car}>
				<m.div
					className={style.row}
					style={{
						x: useTransform(scrollYProgress, [0, 1], [500, 0], {
							clamp: false,
						}),
					}}
				>
					<CarouselImg />
				</m.div>
				<m.div
					className={style.row}
					style={{
						x: useTransform(scrollYProgress, [0, 1], [-500, 0], {
							clamp: false,
						}),
					}}
				>
					<CarouselImg />
				</m.div>
			</div>
		</div>
	);
}

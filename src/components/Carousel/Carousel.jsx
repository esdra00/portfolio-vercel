import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Carrousel from "../../assets/projects preview/desktop-preview.jpg";
import style from "./carouselStyle.module.scss";

export default function Carousel() {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll();

	return (
		<div className={style.carousel} ref={ref}>
			<div className={style.container_car}>
				<motion.div
					className={style.row}
					style={{
						x: useTransform(scrollYProgress, [0, 1], [500, 0], {
							clamp: false,
						}),
					}}
				>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
				</motion.div>
				<motion.div
					className={style.row}
					style={{
						x: useTransform(scrollYProgress, [0, 1], [-500, 0], {
							clamp: false,
						}),
					}}
				>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
					<div className={style.carousel_img}>
						<img src={Carrousel} alt="" />
					</div>
				</motion.div>
			</div>
		</div>
	);
}

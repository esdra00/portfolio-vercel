import {m, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import style from "./contactSectionStyle.module.scss";
import ContactForm from "/src/components/Contact Form/Contact_Form";

const box = {
	initial: {
		// y: 100,
		// scaleX: 0.8,
		y: 0,
		scaleX: 1,
	},
	inView: {
		y: 0,
		scaleX: 1,
		transition: {
			type: "spring",
			duration: 1.5,
		},
	},
};

const txt = {
	title: {opacity: 0.5},
	inView: {
		opacity: 1,
		transition: {
			type: "spring",
			duration: 2,
			bounce: 0.3,
			delay: 0.5,
		},
	},
};

export default function ContactSection() {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]});
	const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

	return (
		<>
			<m.div className={style.round_w} style={{height}}>
				<m.div className={style.round}></m.div>
			</m.div>
			<section className={style.section} ref={ref}>
				<div className={style.container}>
					<m.div
						className={style.contactBox}
						initial="initial"
						whileInView="inView"
						variants={box}
					>
						<m.header
							className={style.title}
							initial="title"
							whileInView="inView"
							variants={txt}
						>
							<h2>
								Let's get to know
								<br />
								each other!
							</h2>
						</m.header>
						<div>
							<m.p
								className={style.desc}
								initial="title"
								whileInView="inView"
								variants={txt}
							>
								Do you have any question? Are you interested in
								working with me? Do you have any suggestion?
								<br />
								Please let me know.
							</m.p>
							<ContactForm />
						</div>
						<footer>
							<div className={style.line}></div>
							Designed & Built by Esdra Bergamasco
						</footer>
					</m.div>
				</div>
			</section>
		</>
	);
}

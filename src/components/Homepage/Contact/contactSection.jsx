import {m, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {contact_box, contact_txt} from "../../../Framer/animation";
import style from "./contactSectionStyle.module.scss";
import ContactForm from "/src/components/shared/Contact Form/Contact_Form";

export default function ContactSection({animation}) {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]});
	const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

	return (
		<>
			{animation ? (
				<m.div className={style.round_w} style={{height}}>
					<m.div className={style.round}></m.div>
				</m.div>
			) : null}
			<section className={style.section} ref={ref}>
				<div className={style.container}>
					<m.div
						className={style.contactBox}
						initial="initial"
						whileInView="inView"
						variants={contact_box}
					>
						<m.header
							className={style.title}
							initial="title"
							whileInView="inView"
							variants={contact_txt}
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
								variants={contact_txt}
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

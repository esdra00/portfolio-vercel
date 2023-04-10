import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import ContactForm from "../../components/Contact Form/Contact_Form";
import style from "./contactSectionStyle.module.scss";

// whitout animation
// export default function ContactSection() {
// 	const ref = useRef(null);
// 	const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]});
// 	const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

// 	return (
// 		<>
// 			{/* <div style={{position: "sticky", bottom: 0, zIndex: -100}}> */}
// 			<motion.div className={style.round_w} style={{height}}>
// 				<motion.div className={style.round}></motion.div>
// 			</motion.div>
// 			<motion.div className={style.section} ref={ref}>
// 				<div className={style.container}>
// 					<div className={style.contactBox}>
// 						<div className={style.title}>
// 							<h2>
// 								Let's get to know
// 								<br />
// 								each other!
// 							</h2>
// 						</div>
// 						<div className={style.desc}>
// 							Do you have any question? Are you interested in working with me?
// 							Do you have any suggestion?
// 							<br />
// 							Please let me know.
// 						</div>
// 						<div>
// 							<ContactForm classForm={style.form} classSubmit={style.submit} />
// 						</div>
// 						<footer>
// 							<div className={style.line}></div>
// 							Designed & Built by Esdra Bergamasco
// 						</footer>
// 					</div>
// 				</div>
// 			</motion.div>
// 			{/* </div> */}
// 		</>
// 	);
// }

// with animation
export default function ContactSection() {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]});
	const height = useTransform(scrollYProgress, [0, 1], [150, 0]);

	const box = {
		initial: {
			y: 100,
			scaleX: 0.8,
			// rotateX: 10,
		},
		inView: {
			y: 0,
			scaleX: 1,
			// rotateX: 0,
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
	const form = {
		initial: {
			opacity: 0,
			x: 20,
			transition: {type: "spring", stiffness: 300, damping: 24},
		},
		inView: {opacity: 1, x: 0, transition: {duration: 0.2}},
	};
	return (
		<>
			<motion.div className={style.round_w} style={{height}}>
				<motion.div className={style.round}></motion.div>
			</motion.div>

			<div className={style.section} ref={ref}>
				<div className={style.container}>
					<motion.div
						className={style.contactBox}
						initial="initial"
						whileInView="inView"
						variants={box}
					>
						<motion.div
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
						</motion.div>
						<motion.div
							className={style.desc}
							initial="title"
							whileInView="inView"
							variants={txt}
						>
							Do you have any question? Are you interested in working
							with me? Do you have any suggestion?
							<br />
							Please let me know.
						</motion.div>
						<div>
							<ContactForm
								classForm={style.form}
								classSubmit={style.submit}
							/>
						</div>
						<footer>
							<div className={style.line}></div>
							Designed & Built by Esdra Bergamasco
						</footer>
					</motion.div>
				</div>
			</div>
		</>
	);
}

{
	/* <form className={style.form}>
	<label htmlFor="name">
		<input
			type="text"
			id="name"
			name="name"
			placeholder="My name is"
		/>
	</label>
	<label htmlFor="email">
		<input
			type="email"
			id="email"
			name="email"
			placeholder="My email is"
		/>
	</label>
	<label htmlFor="message">
		<textarea
			name="message"
			placeholder="Your message"
		></textarea>
	</label>
	<button
		className={style.submit}
	>
		Send
	</button>
</form> */
}

import {motion, useIsPresent} from "framer-motion";
import ContactSection from "../sections/Contact/contactSection";

export default function ContactPage() {
	const isPresent = useIsPresent();
	return (
		<>
			<ContactSection />
			<motion.div
				initial={{scaleX: 1}}
				animate={{scaleX: 0, transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]}}}
				exit={{scaleX: 1, transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]}}}
				style={{originX: isPresent ? 0 : 1}}
				className="privacy-screen"
			></motion.div>
		</>
	);
}

import {LazyMotion, domAnimation, m, useIsPresent} from "framer-motion";
import ContactSection from "/src/components/Sections/Contact/contactSection";

export default function ContactPage() {
	const isPresent = useIsPresent();
	return (
		<LazyMotion features={domAnimation} strict>
			<ContactSection />
			<m.div
				initial={{scaleX: 1}}
				animate={{
					scaleX: 0,
					transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
				}}
				exit={{
					scaleX: 1,
					transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
				}}
				style={{originX: isPresent ? 0 : 1}}
				className="privacy-screen"
			></m.div>
		</LazyMotion>
	);
}

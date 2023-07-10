import {LazyMotion, domAnimation, useIsPresent} from "framer-motion";
import Transition from "../components/shared/pageTransition";
import ContactSection from "/src/components/Homepage/Contact/contactSection";

export default function ContactPage() {
	const isPresent = useIsPresent();
	return (
		<LazyMotion features={domAnimation} strict>
			<ContactSection animation={false} />
			<Transition isPresent={isPresent} />
		</LazyMotion>
	);
}

import {LazyMotion, useIsPresent} from "framer-motion";
import AboutSection from "../components/Homepage/About/aboutSection";
import Carousel from "../components/Homepage/Carousel/Carousel";
import ContactSection from "../components/Homepage/Contact/contactSection";
import HeroSection from "../components/Homepage/Hero/heroSection";
import ProjectSection from "../components/Homepage/Projects/projectSection";
import Transition from "../components/shared/pageTransition";

const loadFeatures = () => import("/src/Framer/features.js").then((res) => res.default);

export default function HomePage() {
	const isPresent = useIsPresent();

	return (
		<LazyMotion features={loadFeatures} strict>
			<div className="App">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<Carousel />
				<ContactSection animation={true} />
				{/* <m.div
					initial={{scaleX: 1}}
					animate={{
						scaleY: 0,
						transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
					}}
					exit={{
						scaleY: 1,
						transition: {duration: 1, ease: [0.645, 0.045, 0.355, 1]},
					}}
					style={{originY: isPresent ? 0 : 1}}
					className="privacy-screen"
				></m.div> */}
				<Transition isPresent={isPresent} />
			</div>
		</LazyMotion>
	);
}

// cubic - bezier(0.645, 0.045, 0.355, 1);

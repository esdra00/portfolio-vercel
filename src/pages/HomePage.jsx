import {LazyMotion, domAnimation, m, useIsPresent} from "framer-motion";
import Carousel from "../components/Carousel/Carousel";
import AboutSection from "../components/Sections/About/aboutSection";
import ContactSection from "../components/Sections/Contact/contactSection";
import HeroSection from "../components/Sections/Hero/heroSection";
import ProjectSection from "../components/Sections/Projects/projectSection";

export default function HomePage() {
	const isPresent = useIsPresent();

	return (
		<LazyMotion features={domAnimation} strict>
			<div className="App">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<Carousel />
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
			</div>
		</LazyMotion>
	);
}

// cubic - bezier(0.645, 0.045, 0.355, 1);

import {motion, useIsPresent} from "framer-motion";
import Carousel from "../components/Carousel/Carousel";
import AboutSection from "../sections/About/aboutSection";
import ContactSection from "../sections/Contact/contactSection";
import HeroSection from "../sections/Hero/heroSection";
import ProjectSection from "../sections/Projects/projectSection";

export default function HomePage() {
	const isPresent = useIsPresent();

	return (
		<>
			<div className="App">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<Carousel />
				<ContactSection />

				<motion.div
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
				></motion.div>
			</div>
		</>
	);
}

// cubic - bezier(0.645, 0.045, 0.355, 1);

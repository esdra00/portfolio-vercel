import { m } from "framer-motion";


export default function Transition({isPresent}) {
	return (
		<m.div
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
		></m.div>
	);
}

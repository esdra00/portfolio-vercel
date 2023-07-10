export const aboutSection = {
	title: {
		x: -100,
		opacity: 0,
	},
	image: {
		x: 100,
		opacity: 0,
		transition: {delay: 5},
	},
	txt: {
		x: -200,
		opacity: 0,
	},
	inView: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 2,
			bounce: 0.3,
		},
	},
};

export const projectSectionImage =
	window.innerWidth > 768
		? {
				img: {x: 50},
				inView: {
					x: 0,
					transition: {
						type: "spring",
						duration: 2,
						bounce: 0.3,
					},
				},
		  }
		: {
				img: {y: 100, scaleX: 0.8},
				inView: {
					y: 0,
					scaleX: 1,
					transition: {
						type: "spring",
						duration: 1.5,
					},
				},
		  };

export const projectSectionTxt =
	window.innerWidth > 768
		? {
				txt: {x: -50, opacity: 0},
				inView: {
					x: 0,
					opacity: 1,
					transition: {
						type: "spring",
						duration: 2,
						bounce: 0.3,
					},
				},
		  }
		: {
				txt: {y: 100, scaleX: 0.8},
				inView: {
					y: 0,
					scaleX: 1,
					transition: {
						type: "spring",
						duration: 1.5,
					},
				},
		  };

export const projectSectionTitle = {
	title: {
		scaleX: 1.2,
	},
	inView: {
		scaleX: 1,
		transition: {
			type: "spring",
			duration: 2,
		},
	},
};

export const projectSectionLine = {
	right: {
		scaleX: 2,
	},
	left: {
		scaleX: 2,
	},
	inView: {
		scaleX: 1,
		transition: {
			type: "spring",
			duration: 2,
			bounce: 0.3,
		},
	},
};


export const contact_box = {
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

export const contact_txt = {
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
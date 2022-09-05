import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const Character = styled(motion.span)`
	display: inline-block;
	margin-rightL -0.05em;
`;

function Intro() {
	const text = "Hi, my name is Andrew.";

	const ctrls = useAnimation();

	const characterAnimation = {
		hidden: {
			opacity: 1,
		},
		visible: {
			opacity: 1,
			transition: {},
		},
	};

	return (
		<div className="title">
			{text.split("").map(function (char, index) {
				char = char == " " ? "\u00A0" : char;
				return (
					<Character
						aria-hidden="true"
						key={index}
						initial="hidden"
						animate={ctrls}
						variants={characterAnimation}
					>
						{char}
					</Character>
				);
			})}
		</div>
	);
}

export default Intro;

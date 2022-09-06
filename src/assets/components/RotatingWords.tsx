import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./component-styles/RotatingWords.css";

function RotatingWords(props: { words: string[] }) {
	const words: string[] = props.words;

	return (
		<div className="rotating-container">
			<TypeAnimation
				sequence={words.flatMap((word) => [word, 1500])}
				wrapper="p"
				cursor={true}
				repeat={Infinity}
				style={{ margin: "1em 0px" }}
			/>
		</div>
	);
}

export default RotatingWords;

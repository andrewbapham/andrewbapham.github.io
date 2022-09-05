import { useState } from "react";
import "./component-styles/rotating-words.css";

function RotatingWords(props: { words: string[] }) {
	const adjArray = props.words;

	const [adjIndex, setAdjIndex] = useState<number>(0);

	const handleClick = () => {
		setAdjIndex(adjIndex == props.words.length - 1 ? 0 : adjIndex + 1);
	};
	return (
		<div className="rotating-container">
			<p>I'm a</p>
			<p className="rotating-text" onClick={() => handleClick()}>
				{adjArray[adjIndex]}
			</p>
		</div>
	);
}

export default RotatingWords;

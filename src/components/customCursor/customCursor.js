import "./customCursor.scss";
import pencil from "../../assets/Pencil.png";
import { useRef, useEffect } from "react";
const CustomCursor = () => {
	const cursorRef = useRef(null);
	useEffect(() => {
		document.addEventListener("mousemove", (event) => {
			const { clientX, clientY } = event;
			// console.log(clientX, clientY);
			const mouseX = clientX - cursorRef.current.clientWidth / 2;
			const mouseY = clientY - cursorRef.current.clientHeight / 2;
			// console.log(mouseX, mouseY);
			cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
			cursorRef.current.style.display = `block`;
		});
	}, []);
	return (
		<div className="cursor" ref={cursorRef}>
			<img className="pencil" src={pencil} alt="cursor" />
		</div>
	);
};

export default CustomCursor;

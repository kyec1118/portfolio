import "./customCursor.scss";
import Pencil from "../../assets/Pencil.png";
import { useRef, useEffect, useState } from "react";

const CustomCursor = () => {
	// const hoverElementClass = ["nav_btn"];
	const [isHover, setIsHover] = useState(false);
	const cursorRef = useRef(null);

	useEffect(() => {
		document.addEventListener("mousemove", (event) => {
			const { clientX, clientY } = event;
			const mouseX = clientX - cursorRef.current.clientWidth / 2;
			const mouseY = clientY - cursorRef.current.clientHeight / 2;
			cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
			cursorRef.current.style.display = `block`;
		});
	}, []);

	useEffect(() => {
		document.addEventListener("mouseover", (event) => {
			const element = String(event.target.className);
			if (element.includes("btn")) {
				setIsHover(true);
			}
		});
	}, []);

	useEffect(() => {
		document.addEventListener("mouseout", (event) => {
			const element = String(event.target.className);
			if (element.includes("btn")) {
				setIsHover(false);
			}
		});
	}, []);

	return (
		<div className={`cursor ${isHover && "hover"}`} ref={cursorRef}>
			<img className="pencil" src={Pencil} alt="cursor" />
		</div>
	);
};

export default CustomCursor;

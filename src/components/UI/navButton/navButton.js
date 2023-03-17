import "./navButton.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavButton = (props) => {
	const { scroll } = useLocomotiveScroll();

	return (
		<div>
			<div
				className={`nav_btn nav_btn_${props.btnName}`}
				onClick={() => {
					console.log(`#${props.btnName}`);
					scroll.scrollTo(`#${props.btnName}`, { duration: 1000 });
				}}
			>
				{props.btnName}
			</div>
		</div>
	);
};

export default NavButton;

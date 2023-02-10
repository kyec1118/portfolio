import "./navBar.scss";
import { useState } from "react";
import NavButton from "../UI/navButton/navButton";
const NavBar = () => {
	const [showNavBar, setShowNavBar] = useState(false);
	const handleShowNavBar = () => {
		setShowNavBar(!showNavBar);
		console.log(showNavBar);
	};

	return (
		<div className="nav_bar">
			<div
				className={`menu_icon ${showNavBar && "close"}`}
				onClick={handleShowNavBar}
			>
				<div class="btn-line"></div>
				<div class="btn-line"></div>
				<div class="btn-line"></div>
			</div>
			<div className={`nav_btns ${showNavBar && "active"}`}>
				<NavButton btnName="About" />
				<NavButton btnName="Experience" />
				<NavButton btnName="Projects" />
				<NavButton btnName="Contact" />
			</div>
		</div>
	);
};

export default NavBar;

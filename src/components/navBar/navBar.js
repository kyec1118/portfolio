import "./navBar.scss";
import NavButton from "../UI/navButton/navButton";
const NavBar = () => {
	return (
		<div className="navBar">
			<NavButton btnName="About" />
			<NavButton btnName="Experience" />
			<NavButton btnName="Projects" />
			<NavButton btnName="Contact" />
		</div>
	);
};

export default NavBar;

import "./navButton.scss";
const NavButton = (props) => {
	return (
		<a href="#contact">
			<button className={`nav_btn nav_btn_${props.btnName}`}>
				{props.btnName}
			</button>
		</a>
	);
};

export default NavButton;

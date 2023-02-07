import React from "react";
import "./header.scss";
import NavBar from "../navBar/navBar";

const Header = () => {
	return (
		<div className="header">
			<div className="header_logo">
				<text className="header_name">Dale.Chang</text>
			</div>
			<NavBar />
		</div>
	);
};

export default Header;

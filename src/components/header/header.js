import React from "react";
import "./header.scss";
import NavBar from "../navBar/navBar";

const Header = () => {
	return (
		<div className="header">
			<a className="header_logo" href="/">
				<text className="header_name">Dale.Chang</text>
			</a>
			<NavBar />
		</div>
	);
};

export default Header;

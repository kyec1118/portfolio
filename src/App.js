import "./styles/app.scss";
import Header from "./components/header/header.js";
import Homepage from "./pages/homepage/homepage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
	const ref = useRef(null);
	const options = {
		smooth: true,
	};
	return (
		<div className="app">
			<LocomotiveScrollProvider options={options} containerRef={ref}>
				<main className="main-container" data-scroll-container ref={ref}>
					<Header />
					<div className="content" data-scroll-section>
						<Homepage />
					</div>
				</main>
			</LocomotiveScrollProvider>
		</div>
	);
}

export default App;

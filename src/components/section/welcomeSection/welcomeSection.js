import "./welcomeSection.scss";
import { ReactComponent as BlueBlob } from "../../../assets/BlueBlob.svg";
import { ReactComponent as PinkBlob } from "../../../assets/PinkBlob.svg";
import portrait from "../../../assets/Portrait2.png";
const WelcomeSection = () => {
	return (
		<section className="welcome" data-scroll-section>
			<BlueBlob className="blueblob" />
			<PinkBlob className="pinkblob" />
			<div className="welcome_text_section">
				<div
					className="welcome_text_hello"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="2"
				>
					Hello! I'm Dale.
				</div>
				<div
					className="welcome_text_intro"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="1"
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</div>
			</div>
			<div
				className="welcome_image"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-2"
			>
				<img
					src={portrait}
					alt="portrait"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-3"
				/>
			</div>
		</section>
	);
};
export default WelcomeSection;
